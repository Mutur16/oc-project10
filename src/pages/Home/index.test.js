import { fireEvent, render, screen, 
  // within 
} from "@testing-library/react";
import Home from "./index";
// import { api, DataProvider } from "../../contexts/DataContext";

// const data = {
//   events: [
//     {
//       id: 1,
//       type: "soirée entreprise",
//       date: "2022-10-29T20:28:45.744Z",
//       title: "Conférence #productCON",
//       cover: "/images/stem-list-EVgsAbL51Rk-unsplash.png",
//       description:
//         "Présentation des outils analytics aux professionnels du secteur",
//       nb_guesses: 1300,
//       periode: "24-25-26 Février",
//       prestations: [
//         "1 espace d’exposition",
//         "1 scéne principale",
//         "2 espaces de restaurations",
//         "1 site web dédié",
//       ],
//     },

//     {
//       id: 2,
//       type: "forum",
//       date: "2022-04-29T20:28:45.744Z",
//       title: "Forum #productCON",
//       cover: "/images/stem-list-EVgsAbL51Rk-unsplash.png",
//       description:
//         "Présentation des outils analytics aux professionnels du secteur",
//       nb_guesses: 1300,
//       periode: "24-25-26 Février",
//       prestations: ["1 espace d’exposition", "1 scéne principale"],
//     },
//   ],
// };

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      setTimeout(() => {
        screen.findByText("Message envoyé !");
      }, 1500);
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", () => {
    // to implement
  })
  it("a list of people is displayed", async () => {
    render(<Home />);
    await screen.findByText("CEO");
    await screen.findByText("Directeur marketing");
    await screen.findByText("CXO");
    await screen.findByText("Animateur");
    await screen.findByText("VP animation");
    await screen.findByText("VP communication");
  })
  it("a footer is displayed", () => {
    const { queryByTestId } = render(<Home />);
    expect(queryByTestId("footer")).toBeTruthy();
  })
  it("an event card, with the last event, is displayed", async () => {
    // to implement

  //   api.loadData = jest.fn().mockReturnValue(data);
  //   render(
  //     <DataProvider>
  //       <Home />
  //     </DataProvider>
  //   );

  //   const { getByText } = within(screen.getByTestId("footer"))
  //   expect(getByText("octobre")).toBeInTheDocument()
  })
})