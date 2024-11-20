import express from 'express';

const app = express();

const PORT = process.env.PORT  || 5000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

let students = [
    { id: 1, name: 'Kevin', age: 12},
    { id: 2, name: 'Mobin', age: 14},
    { id: 3, name: 'Steve', age: 15},
    { id: 4, name: 'Kensington', age: 42},
    { id: 5, name: 'Markus', age: 22},
    { id: 6, name: 'Dimitri', age: 52},
];

app.get(`/api/students`, (req, res) => {
    res.send(students)
});  //  sksdjsd

app.get(`/api/students/:id`,(req,res) => {
    const student = students.find( stu => stu.id === parseInt(req.params.id));
    if(!student) return res.status(404).send(`Student not found.`);
    res.send(student);
});

app.post(`/api/students`,(req, res) => {
    const student = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age
    };
    students.push(student);
    res.send(student);
});

app.put(`/api/students/:id`, (req, res) => {
    const student = students
});

app.put(`/api/students/:id`,(req,res) => {
    const student = students.find( stu => stu.id === parseInt(req.params.id));
    if(!student) return res.status(404).send(`Student not found.`);
    
    student.name = req.body.name;
    student.age = req.body.age;

    res.send(student);
});

app.delete(`/api/students/:id`, (req, res) => {

    const student = students.find( stu => stu.id === parseInt(req.params.id));
    if(!student) return res.status(404).send(`Student not found.`);
    
    const index = students.indexOf(student);
    students.splice(index, 1);

    res.send(students);
    
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
