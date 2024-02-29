import Button from "./Button"
import Input from "./Input"


import { useForm } from 'react-hook-form'
import { server_calls } from '../api/server'
import { useDispatch, useStore } from 'react-redux';
import { chooseYear, chooseMake, chooseModel, chooseName, choosePhone} from "../redux/slices/RootSlice";
// interfaces
interface ContactFormProps {
    id?: string
}


const ContactForm = (props:ContactFormProps) => {
    const { register, handleSubmit } = useForm({})
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = (data: any, event: any) => {
        console.log(`ID: ${props.id}`);
        if (props.id) {
          server_calls.update(props.id, data)
          console.log(`Updated: ${data} ${props.id}`)
          setTimeout(() => {window.location.reload()}, 1000);
          event.target.reset()
        } else {
          dispatch(chooseName(data.name));
          dispatch(chooseMake(data.make));
          dispatch(chooseModel(data.model));
          dispatch(chooseYear(data.year));
          dispatch(choosePhone(data.phone_number));

          server_calls.create(store.getState())
          setTimeout( () => {window.location.reload()}, 1000);
        }
    }

    return (
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div>
              <label htmlFor="year">Year of Car</label>
              <Input {...register('Year')} name='year' placeholder="Year" />
            </div>
            <div>
              <label htmlFor="make">Make of Car</label>
              <Input {...register('Make')} name='make' placeholder="Make" />
            </div>
            <div>
              <label htmlFor="model">Model of Car</label>
              <Input {...register('Model')} name='model' placeholder="Model" />
            </div>
            <div>
              <label htmlFor="name">Contact Full Name</label>
              <Input {...register('first')} name='full name' placeholder="Full Name" />
            </div>
            <div>
              <label htmlFor="phone_number">Phone Number</label>
              <Input {...register('phone_number')} name='phone_number' placeholder="Phone Number" />
            </div>
            <div className="flex p-1">
              <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      )
    }

export default ContactForm