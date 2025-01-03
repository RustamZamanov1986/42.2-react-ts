import { useNavigate } from "react-router-dom"

import Button from "../../Button/Button"
import { UsersPage } from "./styles"

function Users() {
  //хук useNavigate возвращает функцию, при вызове которой нас может перенаправить на указанный url
  const navigate = useNavigate();

  const goToAboutPage = () => {
    navigate('/about')
  }

  return (
    <UsersPage>
      Content Users page
      <Button name="Go to About Page" onClick={goToAboutPage} />
    </UsersPage>
  )
}

export default Users