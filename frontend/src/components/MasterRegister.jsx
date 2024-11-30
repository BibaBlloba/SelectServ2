import { Button, Checkbox, Form, Input } from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const MasterRegister = () => {
  return (
    <div className="bg-white p-5 hidden sm:block">
      <div className="max-h-[670px] bg-[url(./assets/MasterRegister.jpg)] bg-cover bg-right rounded-2xl flex flex-row p-12 justify-between">
        <div className="flex flex-col justify-between ">
          <h1 className="text-white text-5xl max-w-[200px]">
            Начните пользоваться продуктами сейчас
          </h1>
          <div className="text-white">
            <p>Остались вопросы?</p>
            <p>Свяжитесь с техподдержкой</p>
            <p>support@selectel.ru</p>
          </div>
        </div>
        <div className="bg-white rounded-xl border-[5px] border-solid border-gray-300 p-8">
          <Form
            layout="vertical"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Электронная почта"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Пожайлуста, введите почту",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Пароль"
              name="passwd"
              rules={[
                {
                  required: true,
                  message: "Пожайлуста, введите пароль",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Повторите пароль"
              name="passwdRepeat"
              rules={[
                {
                  required: true,
                  message: "Пожайлуста, повторите пароль",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item name="newsCheck" valuePropName="newsCheck" label={null}>
              <Checkbox>Я хочу получать новостную рассылку</Checkbox>
            </Form.Item>
            <Form.Item
              name="licenseCheck"
              valuePropName="licenseCheck"
              label={null}
              rules={[
                {
                  required: true,
                  message: "Обязательно для регистрации",
                },
              ]}
            >
              <Checkbox>Соглашение на обработку персональных данных</Checkbox>
            </Form.Item>

            <Form.Item label={null}>
              <Button
                variant="contained"
                danger
                type="primary"
                htmlType="submit"
              >
                Подтвердить
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default MasterRegister;
