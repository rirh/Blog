 #! /bin/bash
git add .;
git commit -m "await";
git push;
set timeout 60;
ssh -i "cert/ssh.huzhihui.org.cn.pem" root@101.201.234.154> /dev/null 2>&1 << eeooff
./deplory.sh;
touch success.txt 
exit;
eeooff
echo done!

