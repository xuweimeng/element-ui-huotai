<template>
	<div class="table">	
	  <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
	    <el-tab-pane label="未审核" name="first">
	    	<!-- 搜索 -->
				<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
					<el-form :inline="true" :model="formInline" class="demo-form-inline">
					  <el-form-item label="">
					    <el-input v-model="formInline.user" placeholder="患者姓名"></el-input>
					  </el-form-item>
					  <el-form-item label="">
					    <el-input v-model="formInline.way" placeholder="可用随访方案"></el-input>
					  </el-form-item>
					  <el-form-item label="">
					    <el-button type="primary" @click="onSubmit">查询</el-button>
					  </el-form-item>
					</el-form>
				</el-col>
				<!-- 表格 -->
				<el-table ref="multipleTable" :data="tableData3" highlight-current-row tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange" align="right" @select="handSelect" @select-all="handSelectAll" >
					<el-table-column type="selection" width="55" >
			    </el-table-column>
			    <el-table-column prop="number" label="编号" width="150" align="center">
			    </el-table-column>
			    <el-table-column prop="name" label="姓名" width="150" align="center">
			    </el-table-column>
			    <el-table-column prop="hosWay" label="就诊档案" width="420" align="center">
			    </el-table-column>
			    <el-table-column prop="followWay" label="随访方案" width="420" align="center">
			    </el-table-column>
			    <el-table-column align="center" label="审核">
			    	<template slot-scope="scope">
		        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">通过</el-button>
		        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">不通过</el-button>
		      </template>
			    </el-table-column>
			  </el-table>
			  
	    </el-tab-pane>
	    <el-tab-pane label="已审核" name="second">已审核</el-tab-pane>
	    <!-- 分页 -->
	    <el-row :span="24" class="renshi-pagintain">
	    	<el-col :span="12">
	    		<div class="grid-content text-left">
	    			<el-button @click="toggleSelection()" style="margin-left: 15px;">审核通过</el-button>
					    <el-button @click="toggleSelection()">审核不通过</el-button>
	    		</div>
	    	</el-col>
	    	<el-col :span="12">
	    		<div class="grid-content text-right">
	    			<div class="block" style="margin-right: 20px;">
					    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1" :page-size="100" layout="total, prev, pager, next" :total="1000">
					    </el-pagination>
		  			</div>
	    		</div>
	    	</el-col>
	    	
	    	
	    </el-row>
	   	
	  </el-tabs>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		 data() {
      return {
        formInline: {
          user: '',
          way: ''
        },
        tableData3: [
	        {
	        	number: 12000,
	        	name: '张三',
	        	hosWay: '窗前铭宇光，疑是地上霜',
	        	followWay: '举头望明月，一杯清酒又是',
	        	options: '操作'
	        },{
	        	number: 12000,
	        	name: '张三',
	        	hosWay: '窗前铭宇光，疑是地上霜',
	        	followWay: '举头望明月，一杯清酒又是',
	        	options: '操作'
	        },{
	        	number: 12000,
	        	name: '张三',
	        	hosWay: '窗前铭宇光，疑是地上霜',
	        	followWay: '举头望明月，一杯清酒又是',
	        	options: '操作'
	        },{
	        	number: 12000,
	        	name: '张三',
	        	hosWay: '窗前铭宇光，疑是地上霜',
	        	followWay: '举头望明月，一杯清酒又是',
	        	options: '操作'
	        },{
	        	number: 12000,
	        	name: '张三',
	        	hosWay: '窗前铭宇光，疑是地上霜',
	        	followWay: '举头望明月，一杯清酒又是',
	        	options: '操作'
	        },{
	        	number: 12000,
	        	name: '张三',
	        	hosWay: '窗前铭宇光，疑是地上霜',
	        	followWay: '举头望明月，一杯清酒又是',
	        	options: '操作'
	        },{
	        	number: 12000,
	        	name: '张三',
	        	hosWay: '窗前铭宇光，疑是地上霜',
	        	followWay: '举头望明月，一杯清酒又是',
	        	options: '操作'
	        },{
	        	number: 12000,
	        	name: '张三',
	        	hosWay: '窗前铭宇光，疑是地上霜',
	        	followWay: '举头望明月，一杯清酒又是',
	        	options: '操作'
	        },{
	        	number: 12000,
	        	name: '张三',
	        	hosWay: '窗前铭宇光，疑是地上霜',
	        	followWay: '举头望明月，一杯清酒又是',
	        	options: '操作'
	        },{
	        	number: 12000,
	        	name: '张三',
	        	hosWay: '窗前铭宇光，疑是地上霜',
	        	followWay: '举头望明月，一杯清酒又是',
	        	options: '操作'
	        },{
	        	number: 12000,
	        	name: '张三',
	        	hosWay: '窗前铭宇光，疑是地上霜',
	        	followWay: '举头望明月，一杯清酒又是',
	        	options: '操作'
	        },{
	        	number: 12000,
	        	name: '张三',
	        	hosWay: '窗前铭宇光，疑是地上霜',
	        	followWay: '举头望明月，一杯清酒又是',
	        	options: '操作'
	        },{
	        	number: 12000,
	        	name: '张三',
	        	hosWay: '窗前铭宇光，疑是地上霜',
	        	followWay: '举头望明月，一杯清酒又是',
	        	options: '操作'
	        },{
	        	number: 12000,
	        	name: '张三',
	        	hosWay: '窗前铭宇光，疑是地上霜',
	        	followWay: '举头望明月，一杯清酒又是',
	        	options: '操作'
	        },{
	        	number: 12000,
	        	name: '张三',
	        	hosWay: '窗前铭宇光，疑是地上霜',
	        	followWay: '举头望明月，一杯清酒又是',
	        	options: '操作'
	        },
        ],
        activeName: 'first',
        currentPage1: 5,
      }
    },
    mounted(){
    	this._noCheck()
    },
    methods: {
    	// 提交
      onSubmit() {
        console.log('submit!');
      },
      //全选
      toggleSelection(rows) {
      	console.log(rows)
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handSelect(select,row){
      	console.log('选中select')
      },
      handSelectAll(selection){
      	console.log(selection)
      },
      //table
      handleSelectionChange(val) {
        this.multipleSelection = val;
        // console.log(val)
      },
      handleEdit(index, row) {
        console.log(row.followWay);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      //tab
      handleClick(tab, event) {
        console.log(tab, event);
      },
      //axios//未审核
      _noCheck() {
      	// axios.post('http://192.168.1.44:8080/admin/new/orderTask/list',{
      	// 	state: "0",
      	// 	page: '1'
      	// })
      	// .then(response => {
      	// 	console.log(response)
      	// })
      	// .catch(error =>{
      	// 	console.log(error)
      	// })
      },
      //分页
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
	}
</script>

<style scoped lang="scss">
	@import '../../common/style/mixin';
	.toolbar{
		background: #f2f2f2;
		padding: 10px !important;
		margin: 10px 0;
		.el-form {
			// background: #f2f2f2;
			.el-form-item {
				float: left;
				margin-bottom: 0;
			}
		}
	}
	// table
	.el-table {
		border: 1px solid #e6ebf5;
		.has-gutter {
			background: #ccc;
		}
	}
	.renshi-pagintain{
		margin-top: 10px;
		padding: 10px 0;
		background: #DFE4ED;
	}
</style>