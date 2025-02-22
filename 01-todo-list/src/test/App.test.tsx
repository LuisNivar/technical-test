import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("<App/>", () => {
  test("Should be able to add items and remove them", async () => {
    /**
     * =[ N2N TEST ]==========================================================
     * 1- Create user
     * 2- Render App
     * 3- Seach form, input and button an vefiry to be define
     * 4- Type unique text on input
     * 5- Click the add new task button
     * 6- Verify if added a task (find list/ verify amount of child to be 1)
     * 7- Click in remove button (find removeButton)
     * 8- Verify if it's showed the empty task list component
     */

    // 1- Create user
    const user = userEvent.setup();

    // 2- Render App
    render(<App />);

    // 3- Seach form, input and button an vefiry to be define
    const input = screen.getByRole("textbox");
    expect(input).toBeDefined();

    const form = screen.getByRole("form");
    expect(form).toBeDefined();

    const button = form.querySelector("button");
    expect(button).toBeDefined();

    // 4- Type unique text on input
    const text = crypto.randomUUID();
    await user.type(input, text);

    // 5- Click the add new task button
    await user.click(button!);

    // 6- Verify if added a task (find list/ verify amount of child to be 1)
    const list = screen.getByRole("list");
    expect(list).toBeDefined();

    expect(list.childNodes.length).toBe(1);

    const task = screen.getByText(text);
    expect(task).toBeDefined();

    // 7- Click in remove button (find removeButton)
    const removeButton = task.querySelector("button");
    expect(removeButton).toBeDefined();

    await user.click(removeButton!);

    // 8- Verify if it's showed the empty task list component
    const emptyList = screen.getByText("Empty list, add something...");
    expect(emptyList).toBeDefined();
  });
});
