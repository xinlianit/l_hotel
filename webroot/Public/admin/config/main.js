/**
 * 模块化配置
 */
if( typeof(static_base) == 'undefined' ) static_base = '/Public';
seajs.config({
	//基路径
	'base': static_base,
	//别名
	'alias': {
		'jquery': static_base + '/static/js/jquery-3.1.1.min.js',
		'angular': static_base + '/static/js/angular.min.js',
		'webupload': static_base + '/static/js/webupload.js',
		'common': static_base + '/static/js/common.js'
	},
	//路径
	'paths': {
		'admin': static_base + '/admin',
		'config': static_base + '/admin/config',
		'controller': static_base + '/admin/controller',
		'module': static_base + '/admin/module',
		'view': static_base + '/admin/view',
		'plugins': static_base + '/plugins'
	},
});