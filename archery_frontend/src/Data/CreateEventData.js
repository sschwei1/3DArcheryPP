import {validateFunc} from '../FormFunctions/validateForm';

export const CreateEventData = {
  title: 'Create Event',
  buttonLabel: 'Submit',
  formFields: {
    name: {
      label: 'Event Name',
      props:{
        type: 'text',
        name: 'name',
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
    },
    countTypeId: {
      title: 'Count Type',
      props: {
        name: 'countTypeId'
      },
      selectFields:[{
        name: '3 Shot',
        id: 1,
      },{
        name: '2 Shot',
        id: 2
      }],
      validator:{
        rules:[{
          checkError: (val) => !val,
          error: (ctx) => `${ctx.title ?? 'Field'} is not selected`
        }],
        validate: validateFunc
      }
    },
    eventUsers: {
      title: 'User List',
      props: {
        name: 'eventUsers'
      },
      filter:[{
        label: 'Username',
        props:{
        type: 'text',
          name: 'username',
          placeholder: 'Username',
          maxLength: '16',
          autoComplete: 'off'
        }
      }],
      validator:{
        rules:[{
          checkError: (val) => !val,
          error: (ctx) => `No user selected`
        }],
        validate: validateFunc
      }
    }
  }
};