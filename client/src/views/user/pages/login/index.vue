<template>
  <div class="login-wapper">
    <div class="line-layout" />

    <Card
      :bordered="false"
      class="login-content"
    >
      <h1>登录</h1>
      <br>
      <Form
        ref="formInline"
        :model="formInline"
        :rules="ruleInline"
      >
        <FormItem prop="user">
          <Input
            v-model="formInline.user"
            type="text"
            placeholder="请输入邮箱"
          >
          <Icon
            slot="prepend"
            type="ios-person"
          />
                </Input>
        </FormItem>
        <FormItem prop="password">
          <Input
            v-model="formInline.password"
            type="password"
            placeholder="请输入密码"
          >
          <Icon
            slot="prepend"
            type="md-lock"
          />

                </Input>
        </FormItem>
        <p
          style=" cursor: pointer"
          @click="goGister"
        >
          没有账号？立即注册
        </p>


        <FormItem prop="unlock">
          <div
            id="your-dom-id"
            class="nc-container"
          />
        </FormItem>
        <FormItem>
          <Button
            long
            type="primary"
            @click="handleSubmit('formInline')"
          >登录</Button>
          <br>

        </FormItem>
      </Form>
    </Card>


  </div>
</template>

<script>
import { postLogin } from '@/actions';
import Cookies from 'js-cookie';

export default {
  data() {
    return {
      formInline: {
        user: '',
        password: '',
      },
      ruleInline: {
        user: [{
          required: true,
          message: '请输入用户名',
          trigger: 'blur',
        }],
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur',
        },
        {
          type: 'string',
          min: 6,
          message: '密码长度不能小于6位',
          trigger: 'blur',
        },
        ],
      },
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(async (valid) => {
        if (valid) {
          const { code, msg, data } = await postLogin({
            username: this.formInline.user,
            password: this.formInline.password,
          });

          if (code === 200) {
            this.$Notice.info({
              title: '提示',
              desc: msg,
            });
            Cookies.set('user', data);
            this.$router.push({ name: 'index' });
          } else {
            this.$Notice.error({
              title: '提示',
              desc: msg,
            });
          }
        }
      });
    },
    goGister() {
      this.$router.push({ name: 'register' });
    },
  },
};
</script>

<style scoped>
.login-wapper {
    background: #f4f4f4;
    height: 100%;
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: center
}
.login-content{
    padding: 2%;
    width: 36%;
    background: rgba(255, 255, 255, 0)!important;


}

</style>
