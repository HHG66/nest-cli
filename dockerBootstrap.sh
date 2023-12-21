###
 # @Author: HHG
 # @Date: 2023-12-19 08:43:13
 # @LastEditTime: 2023-12-19 20:30:05
 # @LastEditors: 韩宏广
 # @FilePath: \website\dockerBootstrap.sh
 # @文件说明: 
### 
echo -e "---------登录镜像容器服务--------"
# 登录阿里云镜像容器服务
docker login --username=2421578700@qq.com registry.cn-wulanchabu.aliyuncs.com --password=han1314. 
echo -e "---------停掉镜像--------"
# 停掉容器
docker stop website-serve
echo -e "---------删除本地容器和镜像--------"
# 删除本地容器
docker rm website-serve
# 删除本地镜像
docker rmi registry.cn-wulanchabu.aliyuncs.com/hhg-website/website-serve:latest
echo -e "---------拉取镜像--------"
# 拉取镜像
docker pull registry.cn-wulanchabu.aliyuncs.com/hhg-website/website-serve:latest
echo -e "---------创建容器并运行容器--------"
# -rm: docker会在容器退出时删除与它关联的数据卷
# -d: 后台运行容器，并返回容器ID
# -p: 端口映射，本机端口:容器端口
# --name: 指定容器名称
# 最后一个为镜像名称
docker run --rm -d -p 8081:3000 --name website-serve registry.cn-wulanchabu.aliyuncs.com/hhg-website/website-serve:latest
echo -e "---------执行完毕--------"

