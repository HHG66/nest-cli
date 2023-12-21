# 使用Node.js基础镜像  
FROM node:18.17.1  
  
# 设置工作目录  
WORKDIR /app  
  
# 将当前目录内容复制到容器的/app中  
COPY . /app  

# ces
RUN pwd 
RUN cd /app
RUN ls
RUN node 

# 安装npm依赖  
RUN npm install  
  
# 构建npm项目  
RUN npm run build  


# 设置环境变量  
ENV PM2_HOME=/home/pm2  
ENV PATH=$PATH:$PM2_HOME/bin  

# 安装pm2  
RUN npm install -g pm2  
  
# 使用pm2启动项目  
CMD pm2 start app.js