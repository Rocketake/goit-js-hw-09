import"./assets/styles-C1qDPhP-.js";const e={email:"",message:""},t=document.querySelector(".feedback-form"),s=localStorage.getItem("feedback-form-state")??"";if(s==="")t.elements.email.value=s,t.elements.message.value=s,e.email=s,e.message=s;else{const a=JSON.parse(s);t.elements.email.value=a.email,t.elements.message.value=a.message,e.email=a.email,e.message=a.message}const m=a=>{const l=a.target.name;l===Object.keys(e)[Object.keys(e).indexOf(l)]&&(e[l]=a.target.value),localStorage.setItem("feedback-form-state",JSON.stringify(e))};t.addEventListener("input",m);const o=a=>{a.preventDefault(),e.email&&e.message?(localStorage.removeItem("feedback-form-state"),e.email="",e.message="",t.reset()):alert("Fill please all fields")};t.addEventListener("submit",o);
//# sourceMappingURL=2-form.js.map
