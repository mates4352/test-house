import React, {FC} from 'react';
import {AppealStyles} from "../lib/styles/Appeal-styles";
import {AccordionHelp} from "../../../actions/accordion-help";
import {FormAppeal} from "../../../forms/form-appeal";

type AppealType = {};

export const Appeal: FC<AppealType> = ({}) => {
  const {Appeal, Container, List} = AppealStyles

  return (
    <Appeal>
      <Container>
        <FormAppeal/>

        <List>
          <li>
            <AccordionHelp question={'2 + 2'}>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet architecto atque consectetur consequatur consequuntur delectus distinctio enim eos esse est eveniet, ex expedita fugiat impedit iste itaque laboriosam laborum, libero minima nam necessitatibus neque non nostrum officia omnis optio porro quis suscipit temporibus tenetur totam voluptatibus voluptatum? Illum modi neque porro quisquam ratione. Delectus earum eum impedit ipsum iste magni maxime minima nemo reiciendis vero! Commodi ex iure laboriosam quo sunt voluptatibus! Doloribus facilis in inventore provident ratione? Autem commodi dolor dolorum ipsum itaque perspiciatis placeat quod reiciendis saepe voluptates? Aliquid esse libero mollitia, repellendus sunt tenetur ullam voluptatum.</p>
            </AccordionHelp>
          </li>

          <li>
            <AccordionHelp question={'2 + 2'}>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet architecto atque consectetur consequatur consequuntur delectus distinctio enim eos esse est eveniet, ex expedita fugiat impedit iste itaque laboriosam laborum, libero minima nam necessitatibus neque non nostrum officia omnis optio porro quis suscipit temporibus tenetur totam voluptatibus voluptatum? Illum modi neque porro quisquam ratione. Delectus earum eum impedit ipsum iste magni maxime minima nemo reiciendis vero! Commodi ex iure laboriosam quo sunt voluptatibus! Doloribus facilis in inventore provident ratione? Autem commodi dolor dolorum ipsum itaque perspiciatis placeat quod reiciendis saepe voluptates? Aliquid esse libero mollitia, repellendus sunt tenetur ullam voluptatum.</p>
            </AccordionHelp>
          </li>

          <li>
            <AccordionHelp question={'2 + 2'}>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet architecto atque consectetur consequatur consequuntur delectus distinctio enim eos esse est eveniet, ex expedita fugiat impedit iste itaque laboriosam laborum, libero minima nam necessitatibus neque non nostrum officia omnis optio porro quis suscipit temporibus tenetur totam voluptatibus voluptatum? Illum modi neque porro quisquam ratione. Delectus earum eum impedit ipsum iste magni maxime minima nemo reiciendis vero! Commodi ex iure laboriosam quo sunt voluptatibus! Doloribus facilis in inventore provident ratione? Autem commodi dolor dolorum ipsum itaque perspiciatis placeat quod reiciendis saepe voluptates? Aliquid esse libero mollitia, repellendus sunt tenetur ullam voluptatum.</p>
            </AccordionHelp>
          </li>

          <li>
            <AccordionHelp question={'2 + 2'}>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet architecto atque consectetur consequatur consequuntur delectus distinctio enim eos esse est eveniet, ex expedita fugiat impedit iste itaque laboriosam laborum, libero minima nam necessitatibus neque non nostrum officia omnis optio porro quis suscipit temporibus tenetur totam voluptatibus voluptatum? Illum modi neque porro quisquam ratione. Delectus earum eum impedit ipsum iste magni maxime minima nemo reiciendis vero! Commodi ex iure laboriosam quo sunt voluptatibus! Doloribus facilis in inventore provident ratione? Autem commodi dolor dolorum ipsum itaque perspiciatis placeat quod reiciendis saepe voluptates? Aliquid esse libero mollitia, repellendus sunt tenetur ullam voluptatum.</p>
            </AccordionHelp>
          </li>
        </List>
      </Container>
    </Appeal>
  );
};
