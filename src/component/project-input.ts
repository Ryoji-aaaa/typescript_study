///<reference path="base-component.ts"/>
///<reference path="../decorators/autobind.ts"/>

namespace App{

    //ProjectInputClass
    export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
        titleInputElement: HTMLInputElement;
        descriptionInputElement: HTMLInputElement;
        peopleInputElement: HTMLInputElement;
    
        constructor() {
          super("project-input", "app", true, "user-input");
          this.titleInputElement = this.element.querySelector(
            "#title"
          ) as HTMLInputElement;
          this.descriptionInputElement = this.element.querySelector(
            "#description"
          ) as HTMLInputElement;
          this.peopleInputElement = this.element.querySelector(
            "#people"
          ) as HTMLInputElement;
    
          this.configure();
        }
    
        configure() {
          this.element.addEventListener("submit", this.submmitHandler);
        }
    
        renderContent() {}
    
        private gatherUserInput(): [string, string, number] | void {
          const enterdTitle = this.titleInputElement.value;
          const enterdDescripton = this.descriptionInputElement.value;
          const enterdPeople = this.peopleInputElement.value;
          const titleValidateble: Validatable = {
            value: enterdTitle,
            required: true,
          };
          const descriptionValidateble: Validatable = {
            value: enterdDescripton,
            required: true,
            minLength: 5,
          };
          const peopleValidateble: Validatable = {
            value: +enterdPeople,
            required: true,
            min: 1,
            max: 5,
          };
          if (
            validate(titleValidateble) &&
            validate(descriptionValidateble) &&
            validate(peopleValidateble)
          ) {
            alert("Invalid input ,please try again !");
            return;
          } else {
            return [enterdTitle, enterdDescripton, +enterdPeople];
          }
        }
    
        private clearInputs() {
          this.titleInputElement.value = "";
          this.descriptionInputElement.value = "";
          this.peopleInputElement.value = "";
        }
        @autobind
        private submmitHandler(event: Event) {
          event.preventDefault();
          const userInput = this.gatherUserInput();
          if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;
            projectState.addProject(title, desc, people);
            console.log(`${title}\n${desc}\n${people}`);
          }
          this.clearInputs();
        }
      }
}