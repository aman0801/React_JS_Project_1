import React from 'react'

const Contact = () => {
    return <div className="contact">
        <main>
            <h1>Contact Us</h1>
            <form action="ok">
                <div>
                    <label>Name</label>
                    <input type="text" required placeholder='Abc' />
                </div>
                <div>
                    <label>Name</label>
                    <input type="email" required placeholder='Abc@mail.com' />
                </div>
                <div>
                    <label>Text</label>
                    <input type="text" required placeholder='query tell' />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </main>
    </div>
}

export default Contact
