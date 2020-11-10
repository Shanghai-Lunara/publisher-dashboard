<template>
   <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>Header</a-layout-header>
      <a-layout-content>Content</a-layout-content>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      // proto: ''
    }
  },
  mounted() {

    this.initData()
  },
  methods: {
    initData() {

      var proto = this.$proto.github.com.nevercase.publisher.pkg.types

      let arr = ['ListNamespace','ListGroupName','ListTask']

      arr.forEach(element => {
        let data = {
          body: "Dashboard",
          serviceApi: element
        }

        this.initQuest(data, proto)
      });

    },
    initQuest(msg, proto) {
      let message = {
        data: '', 
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
          let namespace = proto.ListNamespaceResponse.decode(message.data)

          console.log(namespace)
          break
        case 'ListGroupName':
          let group = proto.ListGroupNameResponse.decode(message.data)
          console.log(group)
          break
        case 'ListTask':
          let task = proto.ListTaskResponse.decode(message.data)
          console.log(task)
          break
        default:
          break
        
      }
      

    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #components-layout-demo-basic {
  text-align: center;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #7dbcea;
  color: #fff;
}
#components-layout-demo-basic .ant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .ant-layout-sider {
  background: #3ba0e9;
  color: #fff;
  line-height: 120px;
}
#components-layout-demo-basic .ant-layout-content {
  background: rgba(16, 142, 233, 1);
  color: #fff;
  min-height: 120px;
  line-height: 120px;
}
#components-layout-demo-basic > .ant-layout {
  margin-bottom: 48px;
}
#components-layout-demo-basic > .ant-layout:last-child {
  margin: 0;
}
</style>
