import {
  render,
  screen,
  cleanup,
  findByText
} from "@testing-library/react";
import axiosMock from "axios";
import { StudentContextProvider } from "./utils/studentContext";
import App from './App';

afterEach(cleanup);

test('Fetches API data and renders it on the page', () => {
  axiosMock.get.mockResolvedValueOnce({ "data": { "students": 
    [
      {
        "city":"Fush\u00eb-Muhurr",
        "company":"Yadel",
        "email":"iorton0@imdb.com",
        "firstName":"Ingaberg",
        "grades":["78","100","92","86","89","88","91","87"],
        "id":"1",
        "lastName":"Orton",
        "pic":"https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg",
        "skill":"Oracle"
      }
    ]
  }});
  render(
    <StudentContextProvider>
      <App />
    </StudentContextProvider>
  );
  const linkElement = await findByText(/iorton0@imdb.com/i);
  expect(linkElement).toBeInTheDocument();
});
