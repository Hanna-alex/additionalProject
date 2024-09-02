import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

const Content = styled.div`
  padding:  120px 0
`

const H2 = styled.h2`
  text-align: center;
`

const Header = () => <div>Шапка</div>
const Footer = () => <div>Футер</div>

export const App = () => {
	return (
		<>
			<Header />
			<Content>
				<H2>Контент страницы</H2>
				<Routes>
					<Route path='/' element={<div>Главная страница</div>} />
					<Route path='/login' element={<div>Авторизация</div>} />
					<Route path='/register' element={<div>Рагистрация</div>} />
					<Route path='/hispory' element={<div>История операций</div>} />
					<Route path='/settings' element={<div>Настройки</div>} />
					<Route path='*' element={<div>Ошибка</div>} />
				</Routes>
			</Content>
			<Footer />
		</>
	);
}


// cd ./project-00474
// json-server --watch src/db.json --port 3007
