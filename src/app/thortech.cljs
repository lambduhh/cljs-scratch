(ns app.thortech)

(let
    [check (fn [& sets]
             (first (filter #(not (nil? %)) ;; filters nil
                            (map ;; contains winner? (only :x or :o)
                             (fn [ss]
                               (let [r ;; :x or :o ? , returns first non nil value
                                     (first (filter
                                             #(or (= % #{:x}) (= % #{:o}))
                                             ss))]
                                 (if r ;; when found, returns value of winner 
                                   (first r)
                                   nil)))
                             sets))))]

  (defn ttt [board]
    "Takes a 3x3 nested vector (containing elements `nil`, `:x` or `:o`)  and checks all 
rows, columns and diagnals for a set of 3 identical symbols, `:x` or `:o` returning the winning symbol.  "
    (check
     (map set board)                                 ;; rows
     (map set (apply map list board))                ;; columns 
     (list (set (map #(nth (nth board %) %) (range 3)))) ;; diagnal from top left to bottom right
     (list (set (map #(nth (nth board %) (- 2 %)) (range 3))))))) ;; diagnal from top right to bottom left


(comment
  
  (assert (= :x (ttt [[:x :o :x]
                      [:x :o :o]
                      [:x :x :o]]))) ;; Returns `:x` if :x "wins"
  (assert (= :o (ttt [[:o :x :x]
                      [:x :o :x]
                      [:x :o :o]]))) ;; Did :o win?
  (assert (nil? (ttt [[:x :o :x]
                      [:x :o :x]
                      [:o :x :o]])))) ;; Tie? returns nil
  ;; )

;; What does data analyzed have in common?
;; `:x` and `:o` symbols
;; 3 x 3

(defn render-view []
  [:<>
   [:div
    [:h3 "What is the code trying to accomplish?"]
    [:p "This function takes a `board` (a vector of 3 vectors) and determine if there is a consistent set of `:x` or :o` symbols. It appears to try to assert the winner of a tic-tac-toe game "]]
   [:div
    [:h3 "Describe at a high level how it works."]
    [:p "Takes a 3x3 nested vector (containing elements `nil`, `:x` or `:o`)  and checks all 
rows, columns and diagnals for a set of 3 identical symbols, `:x` or `:o` returning the winning symbol.  " ]]
   [:div
    [:h3 "What feedback would you provide in a code review?"]
    [:ul
     [:li "Code review feedback is largely based on context. I keep the following questions in mind when providing a PR review."]
     [:ul
      [:li "who wrote the code?"]
      [:li "what is the AC of the story/ticket (aka why are they writing this code)?"]
      [:li "deadlines?"]]]
    [:ul
     [:li "With that being said... I would suggest the following changes"]
     [:ul
      [:li "Small functions scoped by purpose are better than one big one"]
      [:li "use `some` to find the first non nil value and returns first truthy value.
 this would improve readabilty by making intent clear and the function  more concise and effecient (human brain effecient AND code effecient since stops after finds the value)"]
      [:li "using sets more algo performant"]]]]
   [:div
    [:h3 "Refactor"]
    [:pre
  [:pre
  [:code {:class "language-clojure"}
    "(defn winner? [set]
  (when (or (= set #{:x}) (= set #{:o})) (first set)))

(defn check [sets]
  (some winner? sets))

(defn ttt [board]
  (let [rows (map set board)
        cols (map set (apply map list board))
        diag1 (set (map #(nth (nth board %) %) (range 3)))
        diag2 (set (map #(nth (nth board %) (- 2 %)) (range 3)))]
    (check (concat rows cols [diag1 diag2]))))"]]]]])


