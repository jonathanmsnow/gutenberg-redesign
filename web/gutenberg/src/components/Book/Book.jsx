import { useState } from 'react';
import defaultCover from '../../resources/defaultBook.jpeg';
import Modal from '../Modal/Modal';



const Book = ({bookId}) => {

    const [coverImage, setCoverImage] = useState(defaultCover);
    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <div onClick={setShowModal(!showModal)}>
                <img src={defaultCover}></img>
            </div>
            <Modal isVisible={showModal}></Modal>


        </>

    )

}

export default Book;