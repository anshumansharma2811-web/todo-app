// ===== Todo App =====
// All the logic for our todo list

// ----- Get DOM elements -----
const todoList = document.getElementById('todoList');
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskCount = document.getElementById('taskCount');
const pendingCount = document.getElementById('pendingCount');
const clearAllBtn = document.getElementById('clearAllBtn');

// ----- State -----
let tasks = [];

// ----- Load tasks from localStorage (optional) -----
function loadTasks() {
    const stored = localStorage.getItem('tasks');
    if (stored) {
        try {
            tasks = JSON.parse(stored);
        } catch (e) {
            tasks = [];
        }
    }
}

// ----- Save tasks to localStorage (optional) -----
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// ----- Render the todo list -----
function render() {
    // Clear the list
    todoList.innerHTML = '';

    // Update counters
    const total = tasks.length;
    const pending = tasks.filter(task => !task.completed).length;
    taskCount.textContent = `Total: ${total}`;
    pendingCount.textContent = `Pending: ${pending}`;

    // Show empty message if no tasks
    if (total === 0) {
        todoList.innerHTML = `
            <div class="empty-message">
                <span>📭</span>
                No tasks yet. Add one above!
            </div>
        `;
        return;
    }

    // Loop through tasks and create list items
    tasks.forEach((task, index) => {
        // Create list item
        const li = document.createElement('li');
        li.className = 'todo-item' + (task.completed ? ' completed' : '');

        // Create checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => toggleTask(index));

        // Create task text
        const span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = task.text;

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = '✕';
        deleteBtn.addEventListener('click', () => deleteTask(index));

        // Assemble the list item
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

// ----- Add a new task -----
function addTask() {
    const text = taskInput.value.trim();
    
    if (text === '') {
        // Shake animation effect
        taskInput.style.borderColor = '#ff6b6b';
        setTimeout(() => {
            taskInput.style.borderColor = '#e0e0e0';
        }, 500);
        taskInput.focus();
        return;
    }

    // Add task to array
    tasks.push({
        text: text,
        completed: false
    });

    // Clear input
    taskInput.value = '';
    taskInput.focus();

    // Save and render
    saveTasks();
    render();
}

// ----- Toggle task completion -----
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    render();
}

// ----- Delete a task -----
function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    render();
}

// ----- Clear all tasks -----
function clearAll() {
    if (tasks.length === 0) return;
    
    // Ask for confirmation
    if (confirm('Are you sure you want to delete all tasks?')) {
        tasks = [];
        saveTasks();
        render();
        taskInput.focus();
    }
}

// ----- Event Listeners -----
addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        addTask();
    }
});

clearAllBtn.addEventListener('click', clearAll);

// ----- Initialize the app -----
loadTasks();
render();

// Focus input on load
taskInput.focus();

// Log a message (optional)
console.log('✅ Todo App is ready!');
console.log(`📊 ${tasks.length} tasks loaded.`);