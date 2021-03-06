/**
 * 商户信息维护
 */
define(function(require, exports, module){
	return {
		/**
		 * 添加编辑商户
		 * @param string form_id		表单ID
		 * @param string flag			提交标识；add:添加、edit:编辑
		 */
		saveShop: function(form_id, flag){
			//表单验证参数
			var validator_params = {
					//验证字段
					fields:{
						//详细配置
						hotel_name: {
							rule: 'required',
							msg: {
								required: '请输入商户名称！',
							}
						},
						hotel_type: {
							rule: 'required',
							msg: {
								required: '请选择商户类型',
							}
						},
						adver_number: {
							rule: 'range[0~6]',
						},
					}
					
			};
			
			//提交参数
			var request_data = {
					data: {
						flag: $.common.typeCheck(flag, 'undefined', 'add')
					}
			};
			
			//提交表单
			$.common.formSubmit(form_id, validator_params, request_data);
		},
		
		/**
		 * 添加编辑楼层
		 * @param string form_id		表单ID
		 * @param string flag			提交标识；add:添加、edit:编辑
		 */
		saveFloor: function(form_id, flag){
			//表单验证参数
			var validator_params = {
					//验证字段
					fields:{
						hotel_id: {
							rule: 'integer(+)',
							msg: {
								integer: '请搜索并选择商户'
							}
						},
					}
			};
			
			//提交参数
			var request_data = {
					data: {
						flag: $.common.typeCheck(flag, 'undefined', 'add')
					}
			};
			
			//提交表单
			$.common.formSubmit(form_id, validator_params, request_data);
		},
		
		/**
		 * 添加房间信息绑定设备
		 * @param string form_id		表单ID
		 * @param string flag			提交标识；add:添加、edit:编辑
		 */
		saveRoom: function(form_id, flag){
			//表单验证参数
			var validator_params = {
					//验证字段
					fields:{
						hotel_id: {
							rule: 'integer(+)',
							msg: {
								integer: '请搜索并选择商户'
							}
						},
						floor_id: {
							rule: 'integer(+)',
							msg: {
								integer: '请选择楼层',
							}
						},
						room_name: {
							rule: 'required',
							msg: {
								required: '请输入房间号',
							}
						},
						room_type: {
							rule: 'integer(+)',
							msg: {
								integer: '请选择房间类型',
							}
						},
						room_phone: {
							rule: 'required',
							msg: {
								required: '请输入房间电话',
							}
						}
					}
			};
			
			//提交参数
			var request_data = {
					data: {
						flag: $.common.typeCheck(flag, 'undefined', 'add')
					}
			};
			
			//提交表单
			$.common.formSubmit(form_id, validator_params, request_data);
		},
		
	}
});