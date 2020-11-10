<template>
   <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>publisher-dashboard</a-layout-header>
      <a-layout-content>
        <a-select placeholder="namespace" style="width: 200px" @change="handleChange">
          <a-select-option v-for="namespace in namespaces" :key="namespace" :value="namespace">
            {{namespace}}
          </a-select-option>
        </a-select>
        <a-select placeholder="group" style="width: 200px;margin-left: 20px;" @change="onchange">
          <a-select-option v-for="group in groups" :key="group" :value="group">
            {{group}}
          </a-select-option>
        </a-select>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      namespaces: '',
      groups: '',
      cur_namespace: '',
      cur_group: '',
    }
  },
  mounted() {

    this.initNameSpace()
  },
  methods: {
    initNameSpace() {

      var proto = this.$proto.github.com.nevercase.publisher.pkg.types

      // let arr = ['ListNamespace','ListGroupName','ListTask']

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
        case 'ListTask':
          let task = proto.ListTaskResponse.decode(message.data)
          console.log(task)
          break
        default:
          break
        
      }
    },
    handleChange(value) {
      this.cur_namespace = value
      this.cur_group = ''

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
      console.log(value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#components-layout-demo-basic {
  text-align: center;
  width: 100%;
  height: 100%;
}
#components-layout-demo-basic .ant-layout-header,
#components-layout-demo-basic .ant-layout-footer {
  background: #161b1f;
  color: #fff;
}

#components-layout-demo-basic .ant-layout {
  width: 100%;
  height: 100%;
}
#components-layout-demo-basic .ant-select,.ant-select-enabled {
  margin-top: 20px;
}

.ant-select-selection--single {
  width: 180px;
}
</style>
