import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

test('add two numbers', ()=>{
    expect(2+2).toBe(4)
})