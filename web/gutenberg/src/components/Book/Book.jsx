import { useState } from 'react';
import defaultCover from '../../resources/defaultBook.jpeg';
import Modal from '../Modal/Modal';

import "./style.css";

const Book = ({bookInfo, bookImage = defaultCover}) => {

    const [coverImage, setCoverImage] = useState(bookImage);
    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <img src={coverImage} alt={coverImage}></img>
            


        </>

    )

}

export default Book;