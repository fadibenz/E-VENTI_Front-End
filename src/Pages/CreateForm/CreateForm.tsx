import { FC, useEffect, useState } from 'react';
import SY from './CreateForm.module.scss';
import { InputField } from '../../Components';
import { create } from '@mui/material/styles/createTransitions';
import { createEvent, getCategoryList } from '../../Services/Event';
interface CreateFormProps {
  config: any;
  user: any;
}

const CreateForm: FC<CreateFormProps> = ({ config, user }) => {
  const [event, setEvent] = useState({
    coverUrl: '',
    descripttion: '',
    title: '',
    date: '',
    categoryId: '',
    MaxAttendees: '',
    Adress: '',
  });
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [category, setCatgory] = useState<any>([]);

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
   const [selectedOption, setSelectedOption] = useState('');

   const handleOptionChange = (event:  any) => {
     setSelectedOption(event.target.value);
   };

  useEffect(() => {
    const getList = async () => {
      try {
        const response = await getCategoryList(config);
        console.log(response)
        setCatgory(response);
      } catch (error) {}
    };
    getList();
  }, [user]);

  const handleSumbit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('CoverFile', selectedFile);
    formData.append('description', event.descripttion);
    formData.append('Title', event.title);
    formData.append('DateAndTime', event.date);
    formData.append('MaxAttendees', event.MaxAttendees);
    formData.append('Price', '0');
    const cat = category.find((m: any)=> m.name === selectedOption);
    formData.append('CategoryId', cat.id);
    // formData.append('Location', JSON.stringify({
    //   Longitude:2222,
    //   Latitude: 222,
    // }) );
    formData.append('Latitude', '0');
    formData.append('Longitude', '12333');    


    console.log(formData)
    try {
      const response = await createEvent(formData, config);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className={SY.title}>Create Event</h1>
      <div className={SY.container}>
        <form onSubmit={(e) => handleSumbit(e)}>
          <main className={SY.Main}>
            <article className={SY.FirstSection}>
              <div className={SY.fileupload}>
                <input type='file' onChange={handleFileChange} />
                <div className={SY.fileuploadlabel}>Upload File</div>
              </div>
              <textarea
                name='description'
                id='description'
                rows={4}
                cols={50}
                value={event.descripttion}
                placeholder='Description'
                onChange={(e) =>
                  setEvent({ ...event, descripttion: e.target.value })
                }
              ></textarea>
            </article>
            <article className={SY.SecondSection}>
              <InputField
                Placeholder='Title'
                type='text'
                className={SY.Input}
                change={event.title}
                setChange={setEvent}
                name='title'
                original={event}
              />
              <InputField
                Placeholder='Date'
                type='datetime-local'
                className={SY.Input}
                change={event.date}
                setChange={setEvent}
                name='date'
                original={event}
              />
              <select
                name='category'
                id='category'
                value={selectedOption}
                onChange={handleOptionChange}
              >
                <option value=''>Select</option>
                {category?.map((cat: any) => {
                  return <option value={cat.name}>{cat.name}</option>;
                })}
              </select>
              <InputField
                Placeholder='Max attendees'
                type='number'
                className={SY.Input}
                change={event.MaxAttendees}
                setChange={setEvent}
                name='MaxAttendees'
                original={event}
              />
              <InputField
                Placeholder='Exact address'
                type='text'
                className={SY.Input}
                change={event.Adress}
                setChange={setEvent}
                name='Adress'
                original={event}
              />
              <input type='submit' value='Create' className={SY.btn} />
            </article>
          </main>
        </form>
        <div className={SY.titleDesk}>
          <p className={SY.rl}>Share your event!</p>
        </div>
      </div>
    </>
  );
};

export default CreateForm;
