import {
  Field,
  Form,
  Formik,
} from 'formik';
import React, { CSSProperties, useState } from 'react';
import Select, { StylesConfig } from 'react-select';
import * as Yup from 'yup';
import './Team-Form.scss';

const TeamForm: React.FC<ISearchFormProps> = ({ handleAdd }) => {
  const [confrence, setConference] = useState<OptionsType | null>(null);
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

  const validationSchema = Yup.object().shape({
    name: Yup
      .string()
      .required('Field is required'),
    city: Yup
      .string()
      .matches(/^[a-zA-Zа-щьюяґєіїА-ЩЬЮЯҐЄІЇ\s]+$/g, 'Only letters')
      .required('Field is required'),
    abbreviation: Yup
      .string()
      .matches(/^[A-ZА-ЩЬЮЯҐЄІЇ\s]+$/g, 'Only uppercase letters')
      .required('Field is required'),
  });
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
        validationSchema={validationSchema}
        onSubmit={(values: IValuesFormType) => {
          const newTeam = {
            id: Math.floor(Math.random() * 10000),
            name: values.name,
            city: values.city,
            abbreviation: values.abbreviation,
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
                />
                {errors.name && touched.name && <div className="error-validate">{errors.name}</div>}
              </div>
              <div>
                <span>City</span>
                <br />
                <Field
                  type="text"
                  name="city"
                  placeholder="City"
                  className={errors.city && touched.city ? 'set-input error' : 'set-input'}
                />
                {errors.city && touched.city && <div className="error-validate">{errors.city}</div>}
              </div>
              <div>
                <span>Abbreviation</span>
                <br />
                <Field
                  type="text"
                  placeholder="Abbreviation"
                  className={touched.abbreviation
                    && errors.abbreviation ? 'set-input error' : 'set-input'}
                  name="abbreviation"
                />
                {touched.abbreviation && errors.abbreviation
                  && <div className="error-validate">{errors.abbreviation}</div>}
              </div>
              <div>
                <span>Conference</span>
                <br />
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
