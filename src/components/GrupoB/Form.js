import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import handleForm from './HandleForm';

const Form = ({ productoId }) => {
  const {producto, handleSubmit, getProductsById, handleChange, errors} = handleForm(productoId);

  useEffect(() => {
       if(productoId) {
         getProductsById();
        }
  },[productoId]);
  
  const optionSubmit = () => {
    return (
      <>
        { productoId
          ? <Button
              variant="contained"
              color="primary"
              size="small"
              startIcon={<SaveIcon/>}
              onClick={handleSubmit}
              >
              Update
            </Button>
          : <Button
              variant="contained"
              color="primary"
              size="small"
              startIcon={<SaveIcon/>}
              onClick={handleSubmit}
              >
              Create
            </Button>
        }
      </>
    )
  };
  
    return (
      <>
        <form >
            <div>
            <TextField
              error={!!errors.title}
              type="text"
              label="Title"
              name="title"
              value={producto.title || ''}
              required
              helperText={errors.title}
              onChange={handleChange}
            />
          </div>
          <br/>
          <div>
            <TextField
              error={!!errors.body}
              type="text"
              label="Body"
              name="body"
              value={producto.body  || ''}
              required
              helperText={errors.body}
              onChange={handleChange}
            />
          </div>
          <br/>
          <div>
            <TextField
              error={!!errors.price}
              type="number"
              label="Price"
              name="price"
              value={producto.price  || ''}
              required
              helperText={errors.price}
              onChange={handleChange}
            />
          </div>
            <br/>
            { optionSubmit() }
           
        </form>
        </>
     );
};

export default Form;
