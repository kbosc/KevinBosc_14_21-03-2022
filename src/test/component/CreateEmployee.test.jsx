import React from 'react'
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import  CreateEmployee  from "../../components/CreateEmployee"
import { Modal, useModal } from "modal-component-library"

let container = null;

beforeEach(() => {
    // met en place un élément DOM comme cible de rendu
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // nettoie en sortie de test
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("test modal", () => {
    // expect(1).toBe(1)
    const mockClose = jest.fn
    act(() => {
        render(
            <CreateEmployee>
                <Modal onClose={mockClose}></Modal>
            </CreateEmployee>,
          container
        );
    });
    const close = document.body
    mockClose.mock.calls.length
})