import { ChangeEvent, useEffect, useState } from "react"
import axios from "axios";

// import auto-animate library
import { useAutoAnimate } from '@formkit/auto-animate/react';

import Input from "../../components/Input/Input"
import { Homework09Component, DogImg, ErrorMessage, Spinner } from "./styles"

function Homework09() {
  const [search, setSearch] = useState<string>('');
  const [note, setNote] = useState<string>('');
  const [dogImageUrl, setDogImageUrl] = useState<string | undefined>(undefined);
  const [error, setError] = useState<any>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // useAutoAnimate
  const [containerRef] = useAutoAnimate<HTMLDivElement>();

  const DOG_URL = 'https://dog.ceo/api/breeds/image/random';

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const onNoteChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value)
  }

  const getDogPhoto = async () => {
    setDogImageUrl(undefined);
    setError(undefined)

    try {
      setIsLoading(true)
      const response = await axios.get(DOG_URL);
      //пример работы с отправкой запроса POST (к домашней работе не имеет отношения)
      // const response = await axios.post(url, {
      //    name: 'Bob',
      //    email: 'bob@gmail.com'
      // });
      setDogImageUrl(response.data.message)
    } catch (error: any) {
      // console.log(error);
      setError(error)
    } finally {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    getDogPhoto()
  }, [search])

  return (
    // ref={containerRef} use for auto-animate
    <Homework09Component ref={containerRef}>
      <Input name='search' placeholder="Enter word" value={search} onChange={onSearchChange} />
      <Input name='note' placeholder="Enter note" value={note} onChange={onNoteChange} />
      {dogImageUrl && <DogImg src={dogImageUrl} alt='random dog' />}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      {isLoading && <Spinner></Spinner>}
    </Homework09Component>
  )
}

export default Homework09