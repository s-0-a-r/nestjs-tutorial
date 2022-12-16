-- ユーザー名が'tutorialuser'、パスワードが'tutorialpass'のユーザーを作成
CREATE USER 'tutorialuser'@'%' IDENTIFIED BY 'tutorialpass';
-- 'tutorialuser'に対してCREATE権限を付与
GRANT ALL ON *.* TO 'tutorialuser'@'%';
-- データベース'tutorialdb'作成
DROP DATABASE IF EXISTS tutorialdb;
CREATE DATABASE tutorialdb;
