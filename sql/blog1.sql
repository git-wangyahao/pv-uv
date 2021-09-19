-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.5.53 - MySQL Community Server (GPL)
-- 服务器操作系统:                      Win32
-- HeidiSQL 版本:                  11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- 导出 blob 的数据库结构
CREATE DATABASE IF NOT EXISTS `blob` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `blob`;

-- 导出  表 blob.wyh_articles 结构
CREATE TABLE IF NOT EXISTS `wyh_articles` (
  `article_id` bigint(255) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `article_title` text NOT NULL,
  `article_content` longtext NOT NULL,
  `article_views` bigint(20) NOT NULL,
  `article_comment_count` bigint(20) NOT NULL,
  `article_date` datetime NOT NULL,
  `article_like_count` bigint(20) NOT NULL,
  PRIMARY KEY (`article_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `wyh_articles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `wyh_users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 数据导出被取消选择。

-- 导出  表 blob.wyh_comments 结构
CREATE TABLE IF NOT EXISTS `wyh_comments` (
  `comment_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `article_id` bigint(20) NOT NULL,
  `comment_like_count` bigint(20) NOT NULL,
  `comment_date` datetime NOT NULL,
  `comment_content` text NOT NULL,
  `parent_comment_id` bigint(20) NOT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `article_id` (`article_id`),
  KEY `comment_date` (`comment_date`),
  KEY `parent_comment_id` (`parent_comment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 数据导出被取消选择。

-- 导出  表 blob.wyh_floors 结构
CREATE TABLE IF NOT EXISTS `wyh_floors` (
  `floor_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `post_id` bigint(20) NOT NULL,
  `floor_content` longtext NOT NULL,
  `floor_date` datetime NOT NULL,
  `parent_floor_id` bigint(20) NOT NULL,
  PRIMARY KEY (`floor_id`),
  KEY `parent_floor_id` (`parent_floor_id`),
  KEY `user_id` (`user_id`,`post_id`),
  KEY `floor_date` (`floor_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 数据导出被取消选择。

-- 导出  表 blob.wyh_forums 结构
CREATE TABLE IF NOT EXISTS `wyh_forums` (
  `forum_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `forum_name` varchar(20) NOT NULL,
  `forum_description` text NOT NULL,
  `forum_logo` varchar(255) NOT NULL,
  `forum_post_count` bigint(20) NOT NULL,
  `parent_forum_id` bigint(20) NOT NULL,
  PRIMARY KEY (`forum_id`),
  KEY `forum_name` (`forum_name`),
  KEY `parent_forum_id` (`parent_forum_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- 数据导出被取消选择。

-- 导出  表 blob.wyh_friend_links 结构
CREATE TABLE IF NOT EXISTS `wyh_friend_links` (
  `friend_link_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `friend_links` varchar(255) NOT NULL,
  `friend_link_name` varchar(20) NOT NULL,
  `friend_link_description` text NOT NULL,
  `friend_link_logo` varchar(255) NOT NULL,
  PRIMARY KEY (`friend_link_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 数据导出被取消选择。

-- 导出  表 blob.wyh_labels 结构
CREATE TABLE IF NOT EXISTS `wyh_labels` (
  `label_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `label_name` varchar(20) NOT NULL,
  `label_alias` varchar(15) NOT NULL,
  `label_description` text NOT NULL,
  PRIMARY KEY (`label_id`),
  KEY `label_name` (`label_name`),
  KEY `label_alias` (`label_alias`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- 数据导出被取消选择。

-- 导出  表 blob.wyh_menus 结构
CREATE TABLE IF NOT EXISTS `wyh_menus` (
  `menu_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `menu_name` varchar(20) NOT NULL,
  PRIMARY KEY (`menu_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 数据导出被取消选择。

-- 导出  表 blob.wyh_moderator 结构
CREATE TABLE IF NOT EXISTS `wyh_moderator` (
  `moderator_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `forum_id` bigint(20) NOT NULL,
  `moderator_level` varchar(20) NOT NULL,
  PRIMARY KEY (`moderator_id`,`forum_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 数据导出被取消选择。

-- 导出  表 blob.wyh_options 结构
CREATE TABLE IF NOT EXISTS `wyh_options` (
  `option_id` int(11) NOT NULL AUTO_INCREMENT,
  `option_name` varchar(255) NOT NULL,
  `option_values` longtext NOT NULL,
  PRIMARY KEY (`option_id`),
  KEY `option_name` (`option_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 数据导出被取消选择。

-- 导出  表 blob.wyh_posts 结构
CREATE TABLE IF NOT EXISTS `wyh_posts` (
  `post_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `forum_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `post_title` text NOT NULL,
  `post_views` bigint(20) NOT NULL,
  `post_content` longtext NOT NULL,
  `post_date` datetime NOT NULL,
  `post_status` varchar(20) NOT NULL,
  `post_comment_count` bigint(20) NOT NULL,
  PRIMARY KEY (`post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- 数据导出被取消选择。

-- 导出  表 blob.wyh_set_artitle_label 结构
CREATE TABLE IF NOT EXISTS `wyh_set_artitle_label` (
  `article_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `label_id` bigint(20) NOT NULL,
  PRIMARY KEY (`article_id`),
  KEY `label_id` (`label_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- 数据导出被取消选择。

-- 导出  表 blob.wyh_set_artitle_sort 结构
CREATE TABLE IF NOT EXISTS `wyh_set_artitle_sort` (
  `article_id` bigint(20) NOT NULL,
  `sort_id` bigint(20) NOT NULL,
  PRIMARY KEY (`article_id`,`sort_id`),
  KEY `sort_id` (`sort_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 数据导出被取消选择。

-- 导出  表 blob.wyh_sorts 结构
CREATE TABLE IF NOT EXISTS `wyh_sorts` (
  `sort_id` bigint(20) NOT NULL,
  `sort_name` varchar(50) NOT NULL,
  `sort_alias` varchar(15) NOT NULL,
  `sort_description` text NOT NULL,
  `parent_sort_id` bigint(20) NOT NULL,
  PRIMARY KEY (`sort_id`),
  KEY `sort_name` (`sort_name`),
  KEY `sort_alias` (`sort_alias`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 数据导出被取消选择。

-- 导出  表 blob.wyh_submenus 结构
CREATE TABLE IF NOT EXISTS `wyh_submenus` (
  `link_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `menu_id` bigint(20) NOT NULL,
  `link_name` varchar(255) NOT NULL,
  `link_target` varchar(255) NOT NULL,
  `link_open_way` varchar(20) NOT NULL,
  `parent_link_id` bigint(20) NOT NULL,
  PRIMARY KEY (`link_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 数据导出被取消选择。

-- 导出  表 blob.wyh_users 结构
CREATE TABLE IF NOT EXISTS `wyh_users` (
  `user_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_ip` varchar(20) DEFAULT NULL,
  `user_name` varchar(20) DEFAULT NULL,
  `user_password` varchar(15) DEFAULT NULL,
  `user_email` varchar(30) DEFAULT NULL,
  `user_profile_photo` varchar(255) DEFAULT NULL,
  `user_level` varchar(20) DEFAULT NULL,
  `user_rights` varchar(20) DEFAULT NULL,
  `user_registration_time` datetime DEFAULT NULL,
  `user_birthday` date DEFAULT NULL,
  `user_age` tinyint(4) DEFAULT NULL,
  `user_telephone_number` int(11) DEFAULT NULL,
  `user_nickname` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  KEY `user_name` (`user_name`),
  KEY `user_nickname` (`user_nickname`),
  KEY `user_email` (`user_email`),
  KEY `user_telephone_number` (`user_telephone_number`)
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8;

-- 数据导出被取消选择。

-- 导出  表 blob.wyh_user_friends 结构
CREATE TABLE IF NOT EXISTS `wyh_user_friends` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) NOT NULL,
  `user_friends_id` bigint(20) NOT NULL,
  `user_note` varchar(20) NOT NULL,
  `user_status` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- 数据导出被取消选择。

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
