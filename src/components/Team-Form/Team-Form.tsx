import {
  Field,
  Form,
  Formik,
} from 'formik';
import React, { CSSProperties, useState } from 'react';
import Select, { StylesConfig } from 'react-select';
import { teamValidate, validateCity } from '../utilits/validators';
import './Team-Form.css';

const TeamForm: React.FC<ISearchFormProps> = ({ handleAdd }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [confrence, setConference] = useState<OptionsType | null>(null);
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue((e.currentTarget.value).toUpperCase());
  };
  const options: Array<OptionsType> = [
    { value: 'East', label: 'East' },
    { value: 'West', label: 'West' },
  ];
  const customControlStyles: CSSProperties = {
    height: '2rem',
    minHeight: '0',
    width: '100%',
  };
  const customStyles: StylesConfig<OptionsType, false> = {
    control: (provided, state) => ({
      ...provided,
      ...customControlStyles,
    }),
  };
  return (
    <div className="form-container">
      <h2>Teams</h2>
      <Formik
        initialValues={{
          name: '',
          city: '',
          abbreviation: '',
          conference: 'East',
          id: 0,
        }}
        onSubmit={(values: IValuesFormType) => {
          const newTeam = {
            id: Math.floor(Math.random() * 10000),
            name: values.name,
            city: values.city,
            abbreviation: inputValue,
            conference: confrence?.value,
          };
          handleAdd(newTeam);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="add-form">
              <div>
                <span>Team</span>
                <br />
                <Field
                  type="text"
                  name="name"
                  placeholder="Team"
                  className={errors.name && touched.name ? 'set-input error' : 'set-input'}
                  validate={teamValidate}
                />
                {errors.name && touched.name && <div className="error-city">{errors.name}</div>}
              </div>
              <div>
                <span>City</span>
                <br />
                <Field
                  type="text"
                  name="city"
                  placeholder="City"
                  className={errors.city && touched.city ? 'set-input error' : 'set-input'}
                  validate={validateCity}
                />
                {errors.city && touched.city && <div className="error-city">{errors.city}</div>}
              </div>
              <div>
                <span>Abbreviation</span>
                <br />
                <Field
                  type="text"
                  placeholder="Abbreviation"
                  className={touched.abbreviation && !inputValue ? 'set-input error' : 'set-input'}
                  name="abbreviation"
                  value={inputValue}
                  onChange={(e: React.FormEvent<HTMLInputElement>) => handleChange(e)}
                />
                {touched.abbreviation && !inputValue
                  && <div className="error-city">Field is required</div>}
              </div>
              <div>
                <span>Conference</span>
                <br />
                {/* <Field as="select" name="conference" className="set-input">
                  <option value="East">East</option>
                  <option value="West">West</option>
                </Field> */}
                <Select
                  options={options}
                  onChange={setConference}
                  styles={customStyles}
                  placeholder="East"
                  defaultValue={{ value: 'East', label: 'East' }}
                />
              </div>
              <div className="btn-container">
                <button type="submit" className="add-btn">Add Team</button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TeamForm;

type ISearchFormProps = {
  handleAdd: (newTeam: IValuesFormType) => void
}

export type IValuesFormType = {
  name: string
  city: string
  abbreviation: string
  conference?: string
  id: number
}

type OptionsType = {
  value: string
  label: string
}
