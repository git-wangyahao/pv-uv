-- --------------------------------------------------------
-- 主机:                           192.168.2.200
-- 服务器版本:                        5.7.28 - MySQL Community Server (GPL)
-- 服务器操作系统:                      linux-glibc2.12
-- HeidiSQL 版本:                  11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- 导出 authority 的数据库结构
CREATE DATABASE IF NOT EXISTS `authority` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `authority`;


-- 导出  表 authority.browsing_history 结构
CREATE TABLE IF NOT EXISTS `browsing_history` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `uuid` varchar(50) NOT NULL COMMENT '用户的唯一标识（可用用户工号）',
  `url` varchar(255) NOT NULL COMMENT '用户访问的页面路径',
  `webName` varchar(50) NOT NULL COMMENT '访问页面的title',
  `systemId` varchar(50) NOT NULL COMMENT '系统code',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=204639 DEFAULT CHARSET=utf8 COMMENT='浏览记录-数据检测-用户行为检测-数据上报';

-- 数据导出被取消选择。

-- 导出  表 authority.data_dictionary 结构
CREATE TABLE IF NOT EXISTS `data_dictionary` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `data_code` varchar(50) NOT NULL COMMENT '名称(code)',
  `identification` varchar(50) NOT NULL COMMENT '标识值',
  `data_type` varchar(30) NOT NULL COMMENT '类型',
  `updater` varchar(50) DEFAULT NULL COMMENT '修改人',
  `update_time` datetime DEFAULT NULL COMMENT '修改时间',
  `creater` varchar(50) DEFAULT NULL COMMENT '创建人',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `active` tinyint(1) DEFAULT '1' COMMENT '伪删除',
  `comment` varchar(3000) DEFAULT NULL COMMENT '描述',
  PRIMARY KEY (`id`,`data_code`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COMMENT='系统配置表';

-- 数据导出被取消选择。



-- 导出  表 authority.visitor 结构
CREATE TABLE IF NOT EXISTS `visitor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `system_code` varchar(100) DEFAULT NULL,
  `uuid` varchar(50) DEFAULT NULL,
  `created_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2776 DEFAULT CHARSET=utf8 COMMENT='访客表';

-- 数据导出被取消选择。

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
