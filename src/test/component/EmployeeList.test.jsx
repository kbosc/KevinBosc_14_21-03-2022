import React from 'react';
import { Provider } from 'react-redux';
import { act } from "react-dom/test-utils";
import configureStore from 'redux-mock-store';
import { render, unmountComponentAtNode } from "react-dom";

import  EmployeeList  from "../../components/EmployeeList"
import { store } from "../../redux"
import api from "../../api"

const mockStore = configureStore([]);
let container = null;
let fakeStore = null;

beforeEach(() => {
  // met en place un élément DOM comme cible de rendu
  fakeStore = mockStore({employee:{data:api}})
  container = document.createElement("div");
  document.body.appendChild(container);
});
 
 afterEach(() => {
    // nettoie en sortie de test
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
    


it("test de la recherche", () => {
    // expect(1).toBe(1)
    act(() => {
        render(
            <Provider store={fakeStore}>
                <EmployeeList/>
            </Provider>,
          container
        );
      });
})


