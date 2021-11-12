import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PageContainer } from './components/PageContainer';
import { LoginPage } from './pages/LoginPage/LoginPage';

export const App = () => (
  <Router>
      <div className="App">
          <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/login" element={<LoginPage />}/>
              <Route
                  path="/register"
                  element={
                      <PageContainer>
                          <p>Быть может доработаем в будущем</p>
                      </PageContainer>
                  }
              />
              <Route
                  path="/forgot"
                  element={
                    <PageContainer>
                        <p>
                            Забывать пароли - плохо, но есть тестовый юзер:
                            <br />
                            <br />
                            <code>Email: test@email.com</code>
                            <br />
                            <code>Password: password</code>
                        </p>
                    </PageContainer>
                  }
              />
          </Routes>
      </div>
  </Router>
);
