import React from "react";

export default function Form({handleSubmit}) {

    return (
        <form onSubmit={handleSubmit}>
            <legend>Let's define a word</legend>

            <label htmlFor="word">Word:</label>
            <input type="text" name="word" id="word" placeholder="Toast"/>

            <button type="submit">Submit</button>
        </form>
    )
}