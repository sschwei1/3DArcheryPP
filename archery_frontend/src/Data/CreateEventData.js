import {validateFunc} from '../FormFunctions/validateForm';

export const CreateEventData = {
  title: 'Create Event',
  buttonLabel: 'Submit',
  formFields: {
    eventName: {
      label: 'Event Name',
      props:{
        type: 'text',
        name: 'eventName',
        placeholder: 'Event Name',
        maxLength: '64',
        autoComplete: 'off'
      },
      validator:{
        rules:[{
          checkError: (val) => !val,
          error: (ctx) => `${ctx.label ?? 'Field'} is required`
        },{
          checkError: (val) => !val.match(/^[a-zA-Z0-9_]*$/g),
          error: (ctx) => `${ctx.label ?? 'Field'} only allows letters and numbers`
        }],
        validate: validateFunc
      }
    },
    trackId: {
      title: 'Track',
      props:{
        name: 'trackId'
      },
      filter:[{
        label: 'Track Name',
        props:{
        type: 'text',
          name: 'trackName',
          placeholder: 'Track Name',
          maxLength: '64',
          autoComplete: 'off'
        }
      },{
        label: 'Location',
        props:{
          type: 'text',
          name: 'locationName',
          placeholder: 'Location',
          maxLength: '128',
          autoComplete: 'off'
        },
      }],
      validator:{
        rules:[{
          checkError: (val) => !val,
          error: (ctx) => `${ctx.title ?? 'Field'} is required`
        }],
        validate: validateFunc
      }
    }
  }
};