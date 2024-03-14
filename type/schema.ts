export interface Database {
  public: {
    Tables: {
      expense: {
        Row: {
          id: string;
          amount: number;
          tag_id: string;
          total_expense_id: string;
          user_id: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          amount: number;
          tag_id: string;
          total_expense_id: string;
          user_id: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          amount?: number;
          tag_id?: string;
          total_expense_id?: string;
          user_id?: string;
          created_at?: string;
        };
      };
      total_expense: {
        Row: {
          created_at: string;
          amount: number;
          user_id: string;
          id: string;
        };
        Insert: {
          created_at?: string;
          amount: number;
          user_id: string;
          id?: string;
        };
        Update: {
          created_at?: string;
          amount?: number;
          user_id?: string;
          id?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      hello: {
        Args: Record<PropertyKey, never>;
        Returns: unknown;
      };
      testing: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
    };
    Enums: {
      [_ in never]: never;
    };
  };
}

export interface GenericSchema {
  Tables: {
    expense: {
      Row: {
        id: string;
        amount: number;
        tag_id: string;
        total_expense_id: string;
        user_id: string;
        created_at: string;
      };
      Insert: {
        id?: string;
        amount: number;
        tag_id: string;
        total_expense_id: string;
        user_id: string;
        created_at?: string;
      };
      Update: {
        id?: string;
        amount?: number;
        tag_id?: string;
        total_expense_id?: string;
        user_id?: string;
        created_at?: string;
      };
    };
    total_expense: {
      Row: {
        created_at: string;
        amount: number;
        user_id: string;
        id: string;
      };
      Insert: {
        created_at?: string;
        amount: number;
        user_id: string;
        id?: string;
      };
      Update: {
        created_at?: string;
        amount?: number;
        user_id?: string;
        id?: string;
      };
    };
  };
  Views: {
    [_ in never]: never;
  };
  Functions: {
    hello: {
      Args: Record<PropertyKey, never>;
      Returns: unknown;
    };
    testing: {
      Args: Record<PropertyKey, never>;
      Returns: string;
    };
  };
  Enums: {
    [_ in never]: never;
  };
}
