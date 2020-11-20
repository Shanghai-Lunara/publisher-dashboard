<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider style="width: 300px; min-width: 300px; max-width: 300px; flex: 0 0 300px">
      <div class="logo" style="text-align: center;color: white;line-height: 32px;">
          publisher-dashboard
      </div>

        <a-menu
            theme="dark"
            mode="inline"
            :style="{ borderRight: 0 }"
            @click="changeName"
            :selectedKeys="selectKey"
        >
            <a-sub-menu :key="id" v-for="(runinfo, id) in runner_list" @titleClick="clickName">
                <span slot="title"><a-icon type="laptop" />{{runinfo.name}}</span>

                <a-menu-item v-for="(value, index) in runinfo.steps" :key="runinfo.name + ',' + value.name + ',' + index">
                    {{value.name}}
                    <a-tag color="purple" v-if="value.status == 'Pending'">
                        {{value.status}}
                    </a-tag>

                    <a-tag color="green" v-else-if="value.status == 'Running'">
                        {{value.status}}
                    </a-tag>

                    <a-tag color="blue" v-else-if="value.status == 'Succeeded'">
                        {{value.status}}
                    </a-tag>

                    <a-tag color="red" v-else-if="value.status == 'Failed'">
                        {{value.status}}
                    </a-tag>

                    <a-tag color="orange" v-else-if="value.status == 'Unknown'">
                        {{value.status}}
                    </a-tag>
                    
                </a-menu-item>
            </a-sub-menu>
        </a-menu>

    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-select placeholder="namespace" style="width: 200px;margin-left: 20px;" @change="spaceChange">
            <a-select-option v-for="namespace in namespaces" :key="namespace" :value="namespace">
                {{namespace}}
            </a-select-option>
        </a-select>
        <a-select placeholder="group" style="width: 200px;margin-left: 20px;" @change="onchange">
            <a-select-option v-for="group in groups" :key="group" :value="group">
                {{group}}
            </a-select-option>
        </a-select>
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', overflow: 'initial', }"
      >
        
        <!-- content -->

        <div :style="{ background: '#fff',}">

            <!-- <div> -->
                <a-tabs default-active-key="1" @change="callback" v-if="flag">
                    <a-tab-pane key="1" tab="stepInfo">

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

                            <a-form-model-item label="envs">
                                <a-input :addon-before="id" v-model="form.envs[id]" v-for="(info, id) in form.envs" :key="id"/>
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
                        />
                    </a-tab-pane>

                </a-tabs>
            <!-- </div> -->
            
        </div>

      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
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
        wrapperCol: { span: 14 },
        form: '',

        // logstream
        logStream: {},
        value: '',

        log: '',

        // 自动切换
        selectKey: []

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
        }
    },
    changeName(value) {
        // console.log(value.keyPath)

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

        this.form = info

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
        // case 'ListTask':
        //   let task = proto.ListTaskResponse.decode(message.data)
        //   break
        case 'ListRunner':
          let runner = proto.ListRunnerResponse.decode(message.data)
          _self.runner_list =  JSON.parse(JSON.stringify(runner.runners))

        //   console.log(_self.runner_list)

          break
        case 'UpdateStep':
            console.log('update')

            let upStep = proto.UpdateStepRequest.decode(message.data)

            // console.log(upStep)

            let cur_id = ''

            for (let id in _self.runner_list) {
                if (_self.runner_list[id]['namespace'] === upStep['namespace'] && _self.runner_list[id]['groupName'] === upStep['groupName']) {
                    cur_id = id
                }
            }

            let stepInfo = _self.runner_list[_self.run_id]['steps']
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
        case 'Ping':
            break
        default:
          break
        
      }
    },
    spaceChange(value) {
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
  height: 32px;
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