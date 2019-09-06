#!/bin/sh

read -p "Enter GCC download URL (https://ftp.gnu.org/gnu/gcc/): " gccURL
read -p "Enter Node.js download URL (https://nodejs.org/en/download/): " nodeURL

yum install -y bzip2 gcc-c++ glibc-headers
# 创建临时文件夹
cd ~
mkdir temp
cd temp
# 下载 gcc 并解压缩
wget ${gccURL} -O GCC.tar.gz
tar -zxvf GCC.tar.gz
mv $(ls | grep gcc) gcc
# 创建安装目录
mkdir /usr/local/gcc
cd gcc
# 下载依赖插件
./contrib/download_prerequisites
cd ..
mkdir gcc-tools
# 移动下载好的插件
mv ./gcc/*.tar.* ./gcc-tools
cd gcc-tools
# 解压缩插件
mv $(ls | grep gmp) GMP.tar.gz
tar -xf GMP.tar.gz
mv $(ls | grep gmp) gmp
mv $(ls | grep isl) ISL.tar.gz
tar -xf ISL.tar.gz
mv $(ls | grep isl) isl
mv $(ls | grep mpfr) MPFR.tar.gz
tar -xf MPFR.tar.gz
mv $(ls | grep mpfr) mpfr
mv $(ls | grep mpc) MPC.tar.gz
tar -xf MPC.tar.gz
mv $(ls | grep mpc) mpc
# 安装插件
cd gmp
./configure
make
make install
cd ../isl
./configure
make
make install
cd ../mpfr
./configure
make
make install
cd ../mpc
./configure
make
make install
cd ~/temp/gcc
mkdir gcc-build
cd gcc-build
../configure --prefix=/usr/local/gcc --enable-checking=release --enable-languages=c,c++ --disable-multilib
make -j4
make install
rpm -e $(rpm -q gcc-c++)
rpm -e $(rpm -q gcc)
# 创建链接
ln -s /usr/local/gcc/bin/gcc /usr/bin
ln -s /usr/local/gcc/bin/g++ /usr/bin
ln -s /usr/bin/gcc /usr/bin/cc
rm -rf /usr/lib64/libstdc++.so.6
cd /usr/local/gcc/lib64
name=$(ls | grep '^libstdc++.so.6.[0-9].[0-9][0-9]$')
ln -s /usr/local/gcc/lib64/${name} /usr/lib64
ln -s /usr/lib64/${name} /usr/lib64/libstdc++.so.6

# 安装 Node.js
cd ~/temp
wget ${nodeURL} -O NODE.tar.gz
tar -zxvf NODE.tar.gz
mv $(ls | grep node) node
cd node
mkdir /usr/local/node
./configure --prefix=/usr/local/node
make -j4
make install
ln -s /usr/local/node/bin/node /usr/bin
ln -s /usr/local/node/bin/npm /usr/bin
npm install -g npm
npm install -g @vue/cli
