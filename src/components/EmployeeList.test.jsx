import { render, screen } from '@testing-library/react'
import  EmployeeList  from "./EmployeeList"
import React from 'react'

/**
 * @jest-environment jsdom
 */

test('scénario recherche', function () {
    // render(<EmployeeList title="Bonjours les gens"/>)
    render(<EmployeeList title="Bonjour les gens"><div id="demo"></div></EmployeeList>)
    const demo = document.querySelector('#demo')
    expect(demo).not.toBeNull()
    // const title = screen.getByText("City")
    // expect(title).toBeInTheDocument()
    // expect(1).toEqual(1)
})