import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.scss";
import { useTranslation } from "react-i18next";

function Login() {
  const { t } = useTranslation();

  return (
    <div className="login-box">
      <Form className="login">
        <h4 className="text-center">{t("login.title")}</h4>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{t("login.email")}</Form.Label>
          <Form.Control type="email" placeholder={t("login.email-pl")} />
          <Form.Text className="text-muted">{t("login.info")}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>{t("login.password")}</Form.Label>
          <Form.Control type="password" placeholder={t("login.password-pl")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label={t("login.check")} />
        </Form.Group>
        <div className="sub-btn">
          <Button variant="primary" type="submit">
            {t("login.btn")}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
