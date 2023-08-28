import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Button from "../../UI/Button/Button.js";
import './Search.css'

const Search = () => {
	const initialValues = {
		id: "",
		category: "",
		name: "",
		ingredients: [],
		img: "",
		allIngredients: [],
		description: "",
		cooking: []
	}

	const validate = (item) => {
		const errors = {}
		if (!item.id) {
			errors.id = "Id is required!"
		}
		if (!item.category) {
			errors.category = "Category is required!"
		}
		if (!item.name) {
			errors.name = "Name is required!"
		}
		if (!item.ingredients) {
			errors.ingredients = "Ingredients is required!"
		}
		if (!item.img) {
			errors.img = "Img is required!"
		}
		if (!item.allIngredients) {
			errors.allIngredients = "AllIngredients is required!"
		}
		if (!item.description) {
			errors.description = "Description is required!"
		}
		if (!item.cooking) {
			errors.cooking = "Cooking is required!"
		}
	}

	const handleSubmit = (values) => {
		console.log(values);
	}
	return (
		<Formik
			initialValues={initialValues}
			validate={validate}
			onSubmit={handleSubmit}
		>
			<Form className={'form-area'}>
				<div className={'form-field'}>
					<label>Id</label>
					<Field type={'text'} name={'id'} />
					<ErrorMessage name={'id'} component={'div'} />
				</div>
				<div className={'form-field'}>
					<label>Category</label>
					<Field type={'text'} name={'category'} />
					<ErrorMessage name={'category'} component={'div'} />
				</div>
				<div className={'form-field'}>
					<label>Name</label>
					<Field type={'text'} name={'name'} />
					<ErrorMessage name={'name'} component={'div'} />
				</div>
				<div className={'form-field'}>
					<label>Ingredients</label>
					<Field type={'text'} name={'ingredients'} />
					<ErrorMessage name={'ingredients'} component={'div'} />
				</div>
				<div className={'form-field'}>
					<label>Image</label>
					<Field type={'text'} name={'img'} />
					<ErrorMessage name={'img'} component={'div'} />
				</div>
				<div className={'form-field'}>
					<label>All Ingredients</label>
					<Field type={'text'} name={'allIngredients'} />
					<ErrorMessage name={'allIngredients'} component={'div'} />
				</div>
				<div className={'form-field'}>
					<label>Description</label>
					<Field type={'text'} name={'description'} />
					<ErrorMessage name={'description'} component={'div'} />
				</div>
				<div className={'form-field'}>
					<label>Cooking</label>
					<Field type={'text'} name={'cooking'} />
					<ErrorMessage name={'cooking'} component={'div'} />
				</div>
				<Button type={'submit'}>Submit</Button>
			</Form>
		</Formik>
	)
}
export default Search