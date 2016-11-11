<?php
/**
 * HotelInfoModel.class.php - 商户信息模型
 * @link http://www.pad-phone.com
 * @copyright 2016-11-08 10:40 JiRY(390066398@qq.com)
 */


namespace Admin\Model;
use Think\Model;

class HotelInfoModel extends Model {
    protected $tableName = 'hotel_info';
    
    //验证字段 （必须）、验证规则 （必须）、提示信息 （必须）、验证条件 （可选）、附加规则 （可选）、验证时间（可选）
    protected $_validate = array(
        array('hotel_type', 'require', '商户类型不能为空'),
        array('contacts', 'require', '联系人不能为空')
    );
    
    //完成字段（必须）、完成规则（必须）、完成时间（可选）、附加规则（可选）
    protected $_auto = array(
        array('create_time', 'time', 1, 'function'),
        array('update_time', 'time', 3, 'function'),
        array('data_status', 1)
    );
    
}