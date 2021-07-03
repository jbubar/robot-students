import { render, within } from "@testing-library/react";
import Student from "./student";

const data = {
    city: "Kugesi",
    company: "Skalith",
    email: "lromanet2@wired.com",
    firstName: "Laurens",
    grades: [
        "88",
        "90",
        "79",
        "82",
        "81",
        "99",
        "94",
        "73"
    ],
    id: "3",
    lastName: "Romanet",
    pic: "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/aspernaturnonsapiente.jpg",
    skill: "Employee Handbooks"
}
describe("Renders the Student Component", () => {
    test("renders the correct text", () => {
        const { getByTestId } = render(<Student data={data} />);
        const { getByText } = within(getByTestId("student"));
        expect(getByText("Email")).toBeInTheDocument();
        expect(getByText("Company")).toBeInTheDocument();
        expect(getByText("Skill")).toBeInTheDocument();
        expect(getByText("Average")).toBeInTheDocument();
        expect(getByText("Laurens Romanet")).toBeInTheDocument();
    });

    test("renders the photo with the correct alt tag", () => {
        const { getByAltText } = render(<Student data={data} />);
        expect(getByAltText("Laurens Romanet's Avatar")).toBeInTheDocument();
    });
})