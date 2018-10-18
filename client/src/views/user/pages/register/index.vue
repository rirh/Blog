<template>
  <div
    class="login-wapper"
  >

    <Card
      :bordered="false"
      class="login-content"
      @keydown.enter="handleSubmit('formInline')"
    >
      <h1>注册</h1>
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
        <FormItem prop="password">
          <Input
            v-model="formInline.compassword"
            type="password"
            placeholder="请再次输入密码"
          >
          <Icon
            slot="prepend"
            type="md-lock"
          />
                </Input>
        </FormItem>
        <p
          style=" cursor: pointer"
          @click="goLogin"
        >
          已有账号？立即登录
        </p>
        <br>
        <FormItem>
          <Button
            long
            type="primary"
            @click="handleSubmit('formInline')"
          >注册</Button>
        </FormItem>
      </Form>
    </Card>

  </div>
</template>

<script>
import { postRegister } from '@/actions';

export default {
  data() {
    return {
      formInline: {
        user: '',
        password: '',
      },
      ruleInline: {
        user: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' },
        ],
        password: [
          {
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
    async handleSubmit(name) {
      this.$refs[name].validate(async (valid) => {
        if (valid) {
          const { code, msg } = await postRegister({
            username: this.formInline.user,
            password: this.formInline.password,
          });
          if (code === 200) {
            this.$Notice.info({
              title: '提示',
              desc: msg,
            });
            this.$router.push({ name: 'login' });
          } else {
            this.$Notice.error({
              title: '错误',
              desc: msg,
            });
          }
        }
      });
    },
    goLogin() {
      this.$router.push({ name: 'login' });
    },
  },
};
</script>

<style scoped>
.login-wapper {
  background: #f4f4f4;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-content {
  padding: 2%;
  width: 36%;
  background: rgba(255, 255, 255, 0) !important;
}
</style>
