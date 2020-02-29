import React, { useEffect, useRef } from 'react'
import './styles.scss'

interface IProps {
    enterPressed: (e: React.KeyboardEvent<HTMLInputElement>) => void
    schedule: string
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void
    closeInput: () => void
}

function useOutsideAlerter(ref: any, closeInput: () => void) {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
            closeInput()
        }
    }

    useEffect(() => {
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });
}

const Input: React.FC<IProps> = ({ enterPressed, schedule, handleInput, closeInput }) => {
    // @ts-ignore
    const wrapperRef = useRef(null)
    useOutsideAlerter(wrapperRef, closeInput)

    return <div className="private__main__input__container">
        <input ref={wrapperRef} value={schedule} type="text" onChange={handleInput} onKeyPress={enterPressed} />
    </div>
}

export default Input