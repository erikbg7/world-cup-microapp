import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { IMatch } from '../config/matches';
import TeamDetails from './TeamDetails';
import { fetchGroupStageResults } from '../services/api';
import GroupSection from './GroupsSection';
import { GroupIdentifier, IGroupResults } from '../pages/groups';
import GroupsSectionSkeleton from './GroupsSectionSkeleton';

interface Props {
  match: IMatch;
}

interface IGroupMatchModalHandler {
  open: () => void;
}

const GroupMatchModal = React.forwardRef<IGroupMatchModalHandler, Props>((props, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const closeModal = () => setIsOpen(false);

  React.useImperativeHandle(ref, () => ({ open: () => setIsOpen(true) }));

  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog as="div" className="absolute bottom-0 right-0 z-10" onClose={closeModal}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex h-full items-center justify-center text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full h-full transform overflow-hidden text-left align-middle shadow-xl transition-all bg-blackish">
                <button
                  className="absolute top-10 right-10 hover:bg-gray-600/40 p-2 rounded-lg"
                  onClick={closeModal}
                >
                  <XMarkIcon className="text-gray-300 hover:text-gray-100 h-10 w-10 mx-auto" />
                </button>

                <div className="responsive-screen flex flex-col justify-center items-center w-full h-full ">
                  <div className="text-4xl font-extralight w-full p-4 text-center">
                    <div className="py-2">Group Stage · Group {props.match.group}</div>
                    <hr className="w-full border-gray-600" />
                  </div>

                  <div className="flex justify-around items-center w-full py-16">
                    <TeamDetails
                      name={props.match.team1.name}
                      flag={props.match.team1.flag}
                      flagClassName="h-12 w-20"
                      nameClassName="text-lg"
                      wrapperClassName="flex-col"
                    />
                    <span className="text-3xl text-gray-500 font-extralight">vs</span>
                    <TeamDetails
                      name={props.match.team2.name}
                      flag={props.match.team2.flag}
                      flagClassName="h-12 w-20"
                      nameClassName="text-lg"
                      wrapperClassName="flex-col"
                    />
                  </div>
                  {props.match.group && <DynamicGroupSection group={props.match.group} />}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
});

const DynamicGroupSection: React.FC<{ group: GroupIdentifier }> = (props) => {
  const { data, isError, isLoading } = useQuery(['groupResults'], fetchGroupStageResults);
  const results = data as IGroupResults;

  if (isError || isLoading) {
    return <GroupsSectionSkeleton />;
  }

  return (
    <GroupSection
      showGroup={false}
      className="w-full px-2 py-0"
      group={props.group}
      teams={results[props.group]}
    />
  );
};

GroupMatchModal.displayName = 'GroupMatchModal';

export default GroupMatchModal;
export type { IGroupMatchModalHandler };
