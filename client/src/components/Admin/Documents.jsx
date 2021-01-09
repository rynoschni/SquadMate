import React, {useState, useEffect} from 'react';
import { Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UploadDocument from './UploadDocument';
import SingleDocumentItem from './SingleDocumentItem';

const useStyles = makeStyles((theme) => ({
    picButton: {
        display: 'block',
        margin: 'auto'
    },
}));

const Documents = ({user}) => {
    const classes = useStyles();
    const [documents, setDocuments] = useState([]);
    const [showDocumentButton, setShowDocumentButton] = useState(false);

    useEffect(() => {
        (async function(){
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/document/team/${user.team}`);
            const data = await response.json();
            setDocuments(data);
        })();
    }, [setDocuments, user]);
    

    return (
        <div>
            <Container>
                {documents.map(document => 
                    <SingleDocumentItem key={document._id} user={user}document={document} documents={documents} setDocuments={setDocuments}/>
                )}
            </Container>
            <Container>
                {!!showDocumentButton ? 
                    (
                    <UploadDocument user={user} setShowDocumentButton={setShowDocumentButton} documents={documents} setDocuments={setDocuments}/>
                    ) : (
                    <Button className={classes.picButton} onClick={setShowDocumentButton}>Upload Document</Button>
                    )
                } 
            </Container>
        </div>
    )
}

export default Documents
