<template>
   <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>publisher-dashboard</a-layout-header>
      <a-layout-content>
        <div>
          <a-select placeholder="namespace" style="width: 200px" @change="spaceChange">
            <a-select-option v-for="namespace in namespaces" :key="namespace" :value="namespace">
              {{namespace}}
            </a-select-option>
          </a-select>
          <a-select placeholder="group" style="width: 200px;margin-left: 20px;" @change="onchange">
            <a-select-option v-for="group in groups" :key="group" :value="group">
              {{group}}
            </a-select-option>
          </a-select>
        </div>
        <div style="margin-top: 10px;">
          <a-collapse :activeKey="activeKey" @change="collChange" accordion>
            <a-collapse-panel v-for="(runnerInfo, id) in runner_list" :key="id" :header="runnerInfo.name">

              <a-steps :current="current" direction="vertical" @change="stepChange">
                <a-step v-for="(item, step_id) in runnerInfo.steps" :key="step_id" :title="item.name"  :subTitle="item.status" style="width: 300px; margin: auto;" />
              </a-steps>

            </a-collapse-panel>
          </a-collapse>
        </div>

        <!-- drawer -->

        <div>
          <a-drawer
            title="Info"
            :width="840"
            :visible="visible"
            :body-style="{ paddingBottom: '80px' }"
            @close="onClose('flag')"
          >
            <a-form :form="form" layout="vertical" hide-required-mark>
              <a-row :gutter="16">
                <a-col :span="12">
                  <a-form-item label="Name">
                    <a-input :value="form.name" disabled />
                    <!-- <a-input v-decorator="[ 'name' ]"></a-input> -->
                  </a-form-item>
                </a-col>
                <a-col :span="12">
                  <a-form-item label="runnerName">
                    <a-input :value="form.runnerName" disabled />
                    <!-- <a-input v-decorator="[ 'runnerName' ]"></a-input> -->
                  </a-form-item>
                </a-col>
              </a-row>
              <a-row :gutter="16">
                <a-col :span="12">
                  <a-form-item label="policy">
                    <!-- <a-select v-decorator="[ 'policy' ]"> -->
                    <a-select v-model="form.policy">
                      <a-select-option value="auto">
                        auto
                      </a-select-option>
                      <a-select-option value="manual">
                        manual
                      </a-select-option>
                    </a-select>
                  </a-form-item>
                </a-col>
              </a-row>

              <!-- envs -->

              <a-row :gutter="16">
                <a-col :span="24">
                  <a-form-item label="envs">

                    <!-- table -->

                    <div>
                      <a-table bordered :data-source="dataSource" :columns="columns" :pagination="false">
                        <template slot="value" slot-scope="text, record">
                          <editable-cell :text="text" @change="onCellChange(record.key, 'value', $event)" />
                        </template>
                      </a-table>
                    </div>

                    <!-- <div style="margin-bottom: 16px" v-for="(v, k) in form.envs" :key="k">
                      <a-input :addon-before="k + ':'" :value="v" />
                    </div> -->

                  </a-form-item>
                </a-col>
              </a-row>

            </a-form>
            <div
              :style="{
                position: 'absolute',
                right: 0,
                bottom: 0,
                width: '100%',
                borderTop: '1px solid #e9e9e9',
                padding: '10px 16px',
                background: '#fff',
                textAlign: 'right',
                zIndex: 1,
              }"
            >
              <a-button :style="{ marginRight: '8px' }" @click="onClose('update')">
                Update
              </a-button>
              <a-button type="primary" @click="onClose('run')">
                Running
              </a-button>
            </div>
          </a-drawer>
        </div>

      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>

const EditableCell = {
  template: `
      <div class="editable-cell">
        <div v-if="editable" class="editable-cell-input-wrapper">
          <a-input :value="value" @change="handleChange" @pressEnter="check" /><a-icon
            type="check"
            class="editable-cell-icon-check"
            @click="check"
          />
        </div>
        <div v-else class="editable-cell-text-wrapper">
          {{ value || ' ' }}
          <a-icon type="edit" class="editable-cell-icon" @click="edit" />
        </div>
      </div>
    `,
  props: {
    text: String,
  },
  data() {
    return {
      value: this.text,
      editable: false,
    };
  },
  methods: {
    handleChange(e) {
      const value = e.target.value;
      this.value = value;
    },
    check() {
      this.editable = false;
      this.$emit('change', this.value);
    },
    edit() {
      this.editable = true;
    },
  },
};



export default {
  name: 'Home',
  components: {
    EditableCell,
  },
  data() {
    return {
      namespaces: '',
      groups: '',
      cur_namespace: '',
      cur_group: '',
      runner_list: '',
      current: -1,
      
      // drawer
      form: this.$form.createForm(this),
      visible: false,

      activeKey: [],

      run_id: 0,
      step_id: 0,

      // table
      dataSource: [],
      columns: [
        {
          title: 'name',
          dataIndex: 'name',
          width: '40%',
        },
        {
          title: 'value',
          dataIndex: 'value',
          scopedSlots: { customRender: 'value' },
        },
      ],

    }
  },
  mounted() {
    this.initNameSpace()
    this.initPing()
  },
  methods: {
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

          console.log(_self.runner_list)

          break
        case 'UpdateStep':
          console.log(message)
          break
        case 'Ping':
            break
        default:
          break
        
      }
    },
    collChange(value) {
      this.run_id = value
      this.current = -1
      this.dataSource = []
      this.$forceUpdate()
    },
    stepChange(index) {

      this.current = index

      this.form = this.runner_list[this.run_id]['steps'][index]

      let arr = []
      let i = 0

      for (let key in this.runner_list[this.run_id]['steps'][index]['envs']) {
        arr.push({
          key: i,
          name: key,
          value: this.runner_list[this.run_id]['steps'][index]['envs'][key],
        })

        i++
      }

      this.dataSource = arr
      this.visible = true

      // this.$nextTick(() => {
      //   this.form.setFieldsValue(this.runner_list[this.run_id]['steps'][index])
      //   // this.$forceUpdate()
	    // })  
    },
    onClose(type) {

      if (type == 'flag') {
        return
      }

      let proto = this.$proto.github.com.nevercase.publisher.pkg.types

      let data = ''
      let sendData = ''

      switch(type) {
        case 'run':

          break;

        case 'update':
          let arr = []

          for (let key in this.dataSource) {
            arr[this.dataSource[key]['name']] = this.dataSource[key]['value']
          }

          this.form['envs'] = arr

          break;
      }

      this.visible = false;

      let info = {
        namespace: this.cur_namespace,
        groupName: this.cur_group,
        runnerName: this.runner_list[this.run_id]['name'],
        step: this.form
      }

      if (type == 'update') {
        data = proto.UpdateStepRequest.create(info)
        sendData = proto.UpdateStepRequest.encode(data).finish()
      } else {
        data = proto.RunStepRequest.create(info)
        sendData = proto.RunStepRequest.encode(data).finish()
      }

      console.log(sendData)

      let new_data = {
          body: 'Dashboard',
          serviceApi: 'UpdateStep'
      }

      this.initQuest(new_data, proto, sendData)
      
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
    onCellChange(key, dataIndex, value) {
      const dataSource = [...this.dataSource];
      const target = dataSource.find(item => item.key === key);
      if (target) {
        target[dataIndex] = value;
        this.dataSource = dataSource;
      }
    },
    onDelete(key) {
      const dataSource = [...this.dataSource];
      this.dataSource = dataSource.filter(item => item.key !== key);
    },

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

.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}

.steps-action {
  margin-top: 24px;
}

.ant-steps-item-container {
  width: 300px;
  margin: auto;
}


.editable-cell {
  position: relative;
}

.editable-cell-input-wrapper,
.editable-cell-text-wrapper {
  padding-right: 24px;
}

.editable-cell-text-wrapper {
  padding: 5px 24px 5px 5px;
}

.editable-cell-icon,
.editable-cell-icon-check {
  position: absolute;
  right: 0;
  width: 20px;
  cursor: pointer;
}

.editable-cell-icon {
  line-height: 18px;
  display: none;
}

.editable-cell-icon-check {
  line-height: 28px;
}

.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}

.editable-cell-icon:hover,
.editable-cell-icon-check:hover {
  color: #108ee9;
}

.editable-add-btn {
  margin-bottom: 8px;
}
</style>
