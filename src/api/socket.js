var websock = null
var globalCalback = null
let lockReconnect = false
let timeout = 60 * 1000 // 1分钟一次心跳
let timeoutCd = null //心跳倒计时
let serverTimeoutCd = null //心跳倒计时
let timeoutnum = null //断开 重连倒计时
import cookies from 'vue-cookies';

initWebSocket()//进入即加载

function initWebSocket() {
  //debugger
  websock = new WebSocket(process.env.VUE_APP_BASE_API)
  websock.binaryType = 'arraybuffer'
  websock.onopen = function() {
    websocketopen()
	//console.log(cookies.get('test-cookies'));
  }
  websock.onmessage = function(e) {
    websockonmessage(e)
  }
  websock.onerror = function() {
    console.log('ws连接失败' + '888888')
	lockReconnect = false
	//重新连接
	reconnect()
  }
  websock.onclose = function(e) {
    websocketclose(e)
  }
}

function sendSock(data, callback) {
  globalCalback = callback
  if (websock.readyState === websock.OPEN) {
    // 若是ws开启状态
    websocketsend(data)
  } else if (websock.readyState === websock.CONNECTING) {
    // 若是正在开启状态，则等待1s后重新调用
    setTimeout(function() {
      sendSock(data, callback)
    }, 1000)
  } else {
    // 若未开启 ，则等待1s后重新调用
    setTimeout(function() {
      sendSock(data, callback)
    }, 1000)
	return 'disconnect';
  }
}

function websockonmessage(e) {
  // console.log('websocket_message:' + '222222')
  var buffer = new Uint8Array(e.data)

  if (globalCalback !== null) { 
    globalCalback(buffer)
  }
  resetTime()
}

function websocketsend(data) {
	//debugger
  // console.log('websocket_send:' + '111111')
  if (websock.readyState == 1) {
       websock.send(data)
    } else {
      websock.close()
      initWebSocket()
    }
}

function websocketclose(e) {
  console.log('websocket_close:' + '网络已断开')
  //断开后重新连接
  reconnect()
}

function reconnect(){
	if (lockReconnect) {
	  return;
	}
	lockReconnect = true;
	// 没连接上会一直重连，设置延迟避免请求过多
	timeoutnum && clearTimeout(timeoutnum);
	timeoutnum = setTimeout(function() {
		//debugger
		// 新连接
		initWebSocket()
		lockReconnect = false
	}, 5000)
}

//开启心跳
function startTime(){
	timeoutCd && clearTimeout(timeoutCd)
	serverTimeoutCd && clearTimeout(serverTimeoutCd)
	timeoutCd = setTimeout(() => {
		if(websock.readyState == 1){
			websock.send("heartCheck")
		}else{
			//重连
			reconnect()
		}
		//超时关闭
		serverTimeoutCd = setTimeout(() => {
			websock.close()
		},timeout)
	},timeout)
}

//重置心跳
function resetTime(){
	clearTimeout(timeoutCd)
	clearTimeout(serverTimeoutCd)
	startTime()
}

function websocketopen() {
  console.log('连接成功')
  startTime()
}

export { sendSock }
