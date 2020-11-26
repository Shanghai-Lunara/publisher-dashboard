<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider style="width: 350px; min-width: 300px; max-width: 350px; flex: 0 0 auto; background: white;">
      <div class="logo" style="text-align: center;line-height: 64px; background: black; margin: 0; color: white;">
          publisher-dashboard
      </div>

        <a-menu
            theme="light"
            mode="inline"
            :style="{ borderRight: 0 }"
            @click="changeName"
            :selectedKeys="selectKey"
        >
            <a-sub-menu :key="id" v-for="(runinfo, id) in runner_list" @titleClick="clickName">
                <span slot="title"><a-icon type="laptop" />{{runinfo.name}}</span>

                <a-menu-item v-for="(value, index) in runinfo.steps" :key="runinfo.name + ',' + value.name + ',' + index">
                    <!-- <span v-if="value.available == 'disable'" style="color: red;">{{value.name}}</span>
                    <span v-else>{{value.name}}</span> -->

                    <span>{{value.name}}</span>

                    <a-tag color="red" v-if="value.available == 'disable'" style="margin-left: 5px;">
                        {{value.available}}
                    </a-tag>
                    <a-tag color="green" v-else style="margin-left: 5px;">
                        {{value.available}}
                    </a-tag>
                    
                    <a-tag color="purple" v-if="value.status == 'Pending'" style="margin-left: 5px;">
                        {{value.status}}
                    </a-tag>

                    <a-tag color="green" v-else-if="value.status == 'Running'" style="margin-left: 5px;">
                        {{value.status}}
                    </a-tag>

                    <a-tag color="blue" v-else-if="value.status == 'Succeeded'" style="margin-left: 5px;">
                        {{value.status}}
                    </a-tag>

                    <a-tag color="red" v-else-if="value.status == 'Failed'" style="margin-left: 5px;">
                        {{value.status}}
                    </a-tag>

                    <a-tag color="orange" v-else-if="value.status == 'Unknown'" style="margin-left: 5px;">
                        {{value.status}}
                    </a-tag>

                </a-menu-item>
            </a-sub-menu>
        </a-menu>

    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-select id="namespace" placeholder="namespace" style="width: 200px;margin-left: 20px;" @change="spaceChange">
            <a-select-option v-for="namespace in namespaces" :key="namespace" :value="namespace">
                {{namespace}}
            </a-select-option>
        </a-select>
        <a-select id="group" placeholder="group" style="width: 200px;margin-left: 20px;" @change="onchange" v-model="cur_group">
            <a-select-option v-for="group in groups" :key="group" :value="group">
                {{group}}
            </a-select-option>
        </a-select>

        <a-button type="primary" @click="searchLog" style="margin-left: 20px;">
          查询日志
        </a-button>

      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', overflow: 'initial', }"
      >
        
        <!-- content -->

        <div :style="{ background: '#fff',}">

            <!-- <div> -->
                <a-tabs default-active-key="1" @change="callback" v-if="flag">
                    <a-tab-pane key="1" tab="StepInfo">

                        <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
                            <a-form-model-item label="name">
                                <a-input v-model="form.name" disabled />
                            </a-form-model-item>
                            <a-form-model-item label="policy">
                                <a-select v-model="form.policy">
                                    <a-select-option value="auto">
                                        auto
                                    </a-select-option>
                                    <a-select-option value="manual">
                                        manual
                                    </a-select-option>
                                </a-select>
                            </a-form-model-item>

                            <a-form-model-item label="available">
                                <a-select v-model="form.available">
                                    <a-select-option value="enable">
                                        enable
                                    </a-select-option>
                                    <a-select-option value="disable">
                                        disable
                                    </a-select-option>
                                </a-select>
                            </a-form-model-item>

                            <a-form-model-item label="sharingSetting">
                                <a-select :value="form.sharingSetting ? 'true' : 'false'">
                                    <a-select-option value="true">
                                        true
                                    </a-select-option>
                                    <a-select-option value="false">
                                        false
                                    </a-select-option>
                                </a-select>
                            </a-form-model-item>

                            <a-form-model-item label="sharingData">
                                <a-textarea v-model="tmp_value.sharingData" auto-size disabled />
                            </a-form-model-item>

                            <a-form-model-item label="durationInMs">
                                <a-input addon-after="ms" v-model="form.durationInMs" disabled />
                            </a-form-model-item>

                            <a-form-model-item label="message">
                                <a-textarea v-model="tmp_value.message" auto-size disabled />
                            </a-form-model-item>

                            <a-form-model-item label="uploadFiles">
                                <a-textarea v-model="tmp_value.uploadFiles" auto-size disabled />
                            </a-form-model-item>

                            <a-form-model-item label="envs">
                                <a-input :addon-before="id" v-model="form.envs[id]" v-for="(info, id) in form.envs" :key="id" />
                            </a-form-model-item>

                            <a-form-model-item label="remarks">
                                 <a-textarea v-model="tmp_value.remarks" auto-size disabled />
                            </a-form-model-item>

                            <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
                                <a-button type="primary" @click="clickBtn('run')">
                                    Running
                                </a-button>
                                <a-button style="margin-left: 10px;" @click="clickBtn('update')">
                                    Update
                                </a-button>
                            </a-form-model-item>
                        </a-form-model>
                
                    </a-tab-pane>

                    <a-tab-pane key="2" tab="LogStream" force-render>
                        <a-textarea
                            v-model="value"
                            :auto-size="{ minRows: 3, maxRows: 30 }"
                            style="color: white;background: #000c17;"
                            id="textareaTmp"
                        />
                    </a-tab-pane>

                </a-tabs>

            <!-- logs 标签隐藏  -->
                <!-- <a-tabs v-if="logFlag">
                    <a-tab-pane :tab="logKey" v-for="(logOne, logKey) in logArr" :key="logKey" >
                      <a-timeline style="margin-left: 15px; margin-top: 5px;">
                        <a-timeline-item v-for="(logIndex, index) in logOne" :key="index">
                          <p>{{ logIndex.time }} </p>

                          <a-collapse>
                            <a-collapse-panel key="1" :header="logIndex.name">
                              <a-input :addon-before="id" v-model="logIndex.envs[id]" v-for="(info, id) in logIndex.envs" :key="id" disabled />
                              <a-tag color="pink" slot="extra">
                                {{ logIndex.status }}
                              </a-tag>
                            </a-collapse-panel>
                          </a-collapse>

                        </a-timeline-item>
                      </a-timeline>
                      <div>
                        <a-pagination v-model="current" :total="logArr[logKey].length" show-less-items @change="changePage" style="margin-right: 5px; float: right;padding: 0 2px 8px 2px" />
                      </div>
                    </a-tab-pane>
                    
                </a-tabs> -->
            
            
            <div v-if="logFlag" style="padding: 3px">
              <a-timeline style="margin-left: 15px; margin-top: 5px;">
                <a-timeline-item v-for="(logIndex, index) in logArr" :key="index">
                  <p style="margin-top: 5px;">{{ logIndex.time }} 
                    
                    <a-tag color="cyan" style="margin-left: 5px;">
                        {{ logIndex.runnerName }}
                    </a-tag>

                    <a-tag color="green" style="margin-left: 5px;">
                        {{ logIndex.durationInMs + 'ms'}}
                    </a-tag>

                    <a-tag color="blue" style="margin-left: 5px;">
                        {{ logIndex.status }}
                    </a-tag>
                    
                  </p>

                  <a-collapse>
                    <a-collapse-panel key="1" :header="logIndex.name">
                      <a-input :addon-before="id" v-model="logIndex.envs[id]" v-for="(info, id) in logIndex.envs" :key="id" disabled />
                    </a-collapse-panel>
                  </a-collapse>

                </a-timeline-item>
                
              </a-timeline>

              <a-pagination v-model="current" :total="numData" show-less-items @change="changePage" style="text-align: right; padding-bottom: 2px;" />

            </div>  
        </div>

      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>

import $ from 'jquery'


export default {
  data() {
    return {
        collapsed: false,

        namespaces: '',
        groups: '',
        
        cur_namespace: '',
        cur_group: '',
        cur_runnername: '',
        cur_stepname: '',

        runner_list: '',

        run_id: '',
        step_id: '',

        // content
        flag: false,
        labelCol: { span: 4 },
        wrapperCol: { span: 18 },
        form: '',

        // logstream
        logStream: {},
        value: '',

        log: '',

        // 自动切换
        selectKey: [],

        // searchlog
        logFlag: false,
        logArr: [],

        // message || uploadfiles
        tmp_value: {
          message: '',
          uploadFiles: '',
          remarks: '',
          sharingData: ''
        },

        current: 1,

        // 分页 总数
        numData: 0,


    };
  },
  mounted() {
    this.initNameSpace()
    this.initPing()
  },
  watch: {
    //   log(newValue) {
    //         this.value = this.value + newValue
    //   }
  },
  methods: {
    changePage(page, pageSize) {
      console.log(page)
      console.log(pageSize)

      page = page - 1

      if (page !== 0) {
        page = page * 10 + 1
      }

      var proto = this.$proto.github.com.nevercase.publisher.pkg.types

      let data = {
          namespace: this.cur_namespace,
          groupName: this.cur_group,
          runnerName: '',
          page: page,
          length: pageSize
      }

      let record = proto.ListRecordsRequest.create(data)
      let sendData = proto.ListRecordsRequest.encode(record).finish()

      let new_data = {
          body: 'Dashboard',
          serviceApi: 'ListRecordsRequest'
      }

      this.flag = false
      this.logFlag = true

      this.initQuest(new_data, proto, sendData)

    },
    searchLog() {
      if (this.cur_namespace === '') {
         this.$message.info('当前namespace为空')
         return
      }

      if (this.cur_group === '') {
        this.$message.info('当前group为空')
        return
      }

      var proto = this.$proto.github.com.nevercase.publisher.pkg.types

      let data = {
          namespace: this.cur_namespace,
          groupName: this.cur_group,
          runnerName: '',
          page: 0,
          length: 10
      }

      let record = proto.ListRecordsRequest.create(data)
      let sendData = proto.ListRecordsRequest.encode(record).finish()

      let new_data = {
          body: 'Dashboard',
          serviceApi: 'ListRecordsRequest'
      }

      this.flag = false
      this.logFlag = true

      this.initQuest(new_data, proto, sendData)
    },
    callback(key) {

        if (key === '2') {

            let logStr = this.cur_namespace + ',' + this.cur_group + ',' + this.cur_runnername + ',' + this.cur_stepname

            let str = ''
            
            if (this.logStream.hasOwnProperty(logStr)) {
                this.logStream[logStr].forEach(element => {
                    str = str + element
                });

                this.value = str
            }

            // jquery 文本框滑块移动最下方
            let top = $("#textareaTmp")[0].scrollHeight;
            $("#textareaTmp").scrollTop(top)
        }
    },
    changeName(value) {

        this.selectKey = value.keyPath

        let index = value.keyPath[1]
        let arr = value.keyPath[0].split(',')

        let key = arr[2]

        let info = this.runner_list[index]['steps'][key]

        this.run_id = index
        this.step_id = key

        this.cur_runnername = arr[0]
        this.cur_stepname = arr[1]

        this.flag = true
        this.logFlag = false

        // message || uploadfiles

        this.tmp_value = {
          message: '',
          uploadFiles: '',
          remarks: '',
          sharingData: ''
        }

        if (info.messages.length !== 0) {
          this.tmp_value.message = info.messages.join('\n')
        } 

        if (info.uploadFiles.length !== 0) {
          let newArr = []
          for (let i = 0; i < info.uploadFiles.length; i++) {
            newArr.push(JSON.stringify(info.uploadFiles[i]))
            
          }

          this.tmp_value.uploadFiles = newArr.join('\n')
        }

        if (info.remarks.length !== 0) {
          this.tmp_value.remarks = info.remarks.join('\n')
        }

        if (info.sharingData === '') {
          let sharingList = []

          for (let shareKey in info.sharingData) {
            let shareStr = shareKey + ':' + info.sharingData[shareKey]
            sharingList.push(shareStr)
          }
          this.tmp_value.sharingData = sharingList.join('\n') 
        }

        this.form = info

        console.log(info)

        // log
        let logStr = this.cur_namespace + ',' + this.cur_group + ',' + this.cur_runnername + ',' + this.cur_stepname

        let str = ''
        
        if (this.logStream.hasOwnProperty(logStr)) {
            this.logStream[logStr].forEach(element => {
                str = str + element
            });

            this.value = str
        } else {
            this.value = ''
        }
        
    },
    clickBtn(type) {

        var proto = this.$proto.github.com.nevercase.publisher.pkg.types

        let info = {
            namespace: this.cur_namespace,
            groupName: this.cur_group,
            runnerName: this.runner_list[this.run_id]['name'],
            step: this.form
        }

        let data = ''
        let sendData = ''
        let api = ''

        this.logStream = {}

        if (type === 'run') {
            data = proto.RunStepRequest.create(info)
            sendData = proto.RunStepRequest.encode(data).finish()
            api = 'RunStep'
        } else {
            data = proto.UpdateStepRequest.create(info)
            sendData = proto.UpdateStepRequest.encode(data).finish()
            api = 'UpdateStep'
        }

        let new_data = {
            body: 'Dashboard',
            serviceApi: api
        }

        this.initQuest(new_data, proto, sendData)
    },
    clickName(value) {},
    initPing() {
      let _self = this
      var proto = this.$proto.github.com.nevercase.publisher.pkg.types
      setInterval(function() {
        
        let data = {
            body: 'Dashboard',
            serviceApi: 'Ping'
        }

        _self.initQuest(data, proto)
      }, 5000)
    },
    initNameSpace() {

      var proto = this.$proto.github.com.nevercase.publisher.pkg.types

      let data = {
          body: 'Dashboard',
          serviceApi: 'ListNamespace'
      }

      this.initQuest(data, proto)

    },
    initQuest(msg, proto, other_data = '') {
      let message = {
        data: other_data, 
        type: msg
      }

      let data = proto.Request.create(message)
      let _self = this
      let sendData = proto.Request.encode(data).finish()

      this.$socket(sendData, function(res) {
        _self.returnRes(res, _self)
      })
    },
    returnRes(res, _self) {
      let proto = _self.$proto.github.com.nevercase.publisher.pkg.types

      let message = proto.Request.decode(res);

      switch (message.type.serviceApi) {
        case 'ListNamespace':
          let namespaces = proto.ListNamespaceResponse.decode(message.data)
          _self.namespaces = namespaces.items
          break
        case 'ListGroupName':
          let group = proto.ListGroupNameResponse.decode(message.data)
          _self.groups = group.items

          break
        case 'ListRunner':
          let runner = proto.ListRunnerResponse.decode(message.data)
          _self.runner_list =  JSON.parse(JSON.stringify(runner.runners))

          break
        case 'UpdateStep':
            console.log('update')

            let upStep = proto.UpdateStepRequest.decode(message.data)

            let cur_id = ''

            for (let id in _self.runner_list) {
                if (_self.runner_list[id]['namespace'] === upStep['namespace'] && _self.runner_list[id]['groupName'] === upStep['groupName'] && _self.runner_list[id]['name'] === upStep['runnerName']) {
                    cur_id = id
                }
            }

            let stepInfo = _self.runner_list[cur_id]['steps']
            let id = ''

            for (let index in stepInfo) {
                if (stepInfo[index]['name'] === upStep['step']['name']) {
                    id = index
                    _self.runner_list[cur_id]['steps'][index] = upStep['step']
                }
            }

            _self.$set(_self.runner_list[cur_id]['steps'], id, upStep['step'])

            let selectStr = upStep['runnerName'] + ',' + upStep['step']['name'] + ',' + id

            _self.cur_stepname = upStep['step']['name']

            _self.selectKey = [selectStr, parseInt(cur_id)]

            break
        case 'Runstep':
            console.log('run')
            console.log(message)
            break
        case 'LogStream':
            // namespace: "helix-saga", groupName: "cn-leiting", runnerName: "HelixSagaServer", stepName: "Zip codes", output: ""
            console.log('log')
            let logs = proto.LogStreamRequest.decode(message.data)

            let logStr = logs['namespace'] + ',' + logs['groupName'] + ',' + logs['runnerName'] + ',' +  logs['stepName']

            if (!_self.logStream.hasOwnProperty(logStr)) {
                _self.logStream[logStr] = []
            }

            _self.log = logs['output'] + "\n"


            _self.logStream[logStr].push(_self.log)

            break
        case 'ListRecordsResponse':
          console.log('recorder')
          let record = proto.ListRecordsResponse.decode(message.data)

          console.log(record)

          _self.numData = record.recordNumber

          _self.logArr = []

          // 拼接log数据

          for (let one in record.records) {
            // console.log(record.records[one])
            let cur_arr = []
            let stepInfo = proto.Step.decode(record.records[one]['stepInfo'])

            // if (!_self.logArr.hasOwnProperty(record.records[one]['runnerName'])) {
            //   _self.logArr[record.records[one]['runnerName']] = []
            // } 

            cur_arr['name'] = stepInfo['name']
            cur_arr['envs'] = stepInfo['envs']
            cur_arr['status'] = stepInfo['status']
            cur_arr['time'] = _self.getTime(record.records[one]['createdTM'])
            cur_arr['durationInMs'] = stepInfo['durationInMs']
            cur_arr['runnerName'] = record.records[one]['runnerName']

            // _self.logArr[record.records[one]['runnerName']].push(cur_arr)

            // 全部数据
            _self.logArr.push(cur_arr)
          }

          console.log(_self.logArr)

          break
        case 'Ping':
            break
        default:
          break
        
      }
    },
    getTime(time) {
      return new Date(parseInt(time) * 1000).toLocaleString()
    },
    spaceChange(value) {
      this.cur_namespace = value
      this.cur_group = ''
      this.groups = ''
      this.runner_list = ''
 
      var proto = this.$proto.github.com.nevercase.publisher.pkg.types
      let data = {
          body: 'Dashboard',
          serviceApi: 'ListGroupName'
      }

      let other_data = {
        namespace: value
      }
        
      let init = proto.ListGroupNameRequest.create(other_data)
      this.initQuest(data, proto, proto.ListGroupNameRequest.encode(init).finish())

    },
    onchange(value) {
      this.cur_group = value

      var proto = this.$proto.github.com.nevercase.publisher.pkg.types
      let data = {
          body: 'Dashboard',
          serviceApi: 'ListRunner'
      }

      let other_data = {
        namespace: this.cur_namespace,
        groupName: value
      }
 
      let init = proto.ListRunnerRequest.create(other_data)
      this.initQuest(data, proto, proto.ListRunnerRequest.encode(init).finish())
    },
  }
};
</script>
<style>
#components-layout-demo-custom-trigger {
    height: 100%;
    width: 100%;
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.ant-input-group-wrapper .ant-input-group-addon {
    background:antiquewhite;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 64px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.ant-layout-sider, .ant-layout-sider-dark {
    flex: 0 0 300px;
    max-width: 300px;
    min-width: 300px;
    width: 300px;
}

</style>